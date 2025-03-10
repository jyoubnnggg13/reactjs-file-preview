import React, { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "./styles.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

interface FilePreviewProps {
  preview: string;
  fileType?: string;
  axiosInstance?: any; // Using `any` as axiosInstance type (can be refined further)
}

const getFileType = async (
  fileType: string | undefined,
  preview: string,
  axiosInstance: any = null
): Promise<string> => {
  if (fileType) return fileType;

  try {
    const url = new URL(preview);
    const pathname = url.pathname.toLowerCase();

    if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg") || pathname.endsWith(".png") || pathname.endsWith(".gif")|| pathname.endsWith(".webp")) {
      return "image";
    } else if (pathname.endsWith(".mp4") || pathname.endsWith(".webm") || pathname.endsWith(".ogg")) {
      return "video";
    } else if (pathname.endsWith(".pdf")) {
      return "application/pdf";
    }

    const fetcher = axiosInstance ? axiosInstance.head : fetch;
    const response = axiosInstance ? await fetcher(preview) : await fetcher(preview, { method: "HEAD" });
    const contentType = axiosInstance ? response.headers["content-type"] : response.headers.get("Content-Type");

    if (contentType.startsWith("image/")) return "image";
    if (contentType.startsWith("video/")) return "video";
    if (contentType === "application/pdf") return "application/pdf";
  } catch (error) {
    console.warn("Invalid URL or local file detected.", error);
  }

  return "unknown";
};

const FilePreview: React.FC<FilePreviewProps> = ({ preview, fileType, axiosInstance = null }) => {
  const [pdfThumbnail, setPdfThumbnail] = useState<string | null>(null);
  const [resolvedType, setResolvedType] = useState<string>(fileType || "unknown");

  useEffect(() => {
    const resolveType = async () => {
      const type = await getFileType(fileType, preview, axiosInstance);
      setResolvedType(type);
    };

    resolveType();
  }, [preview, fileType, axiosInstance]);

  const generatePdfThumbnail = async (pdfUrl: string) => {
    try {
      let pdfData: Uint8Array;
      if (axiosInstance) {
        const response = await axiosInstance.get(pdfUrl, { responseType: "arraybuffer" });
        pdfData = new Uint8Array(response.data);
      } else {
        const response = await fetch(pdfUrl);
        const arrayBuffer = await response.arrayBuffer();
        pdfData = new Uint8Array(arrayBuffer);
      }

      const loadingTask = pdfjsLib.getDocument({ data: pdfData, verbosity: pdfjsLib.VerbosityLevel.ERRORS });
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const desiredWidth = 10000;
      const viewport = page.getViewport({ scale: 1 });
      const scale = desiredWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
      setPdfThumbnail(canvas.toDataURL("image/png"));
    } catch (error) {
      console.error("Error generating PDF thumbnail:", error);
    }
  };

  const openInNewTab = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => { 
    if (resolvedType === "application/pdf") {
      generatePdfThumbnail(preview);
    }
  }, [preview, resolvedType]);

  return (
    <>
      {resolvedType.startsWith("image") ? (
        <img src={preview} alt="Preview" className="preview-image" onClick={()=>openInNewTab(preview)}/>
      ) : resolvedType.startsWith("video") ? (
        <video src={preview} controls className="preview-video" onClick={()=>openInNewTab(preview)}/>
      ) : resolvedType === "application/pdf" ? (
        <img src={pdfThumbnail || preview} alt="PDF Preview" className="preview-image" onClick={()=>openInNewTab(preview)}/>
      ) : (
        <span>Unsupported file type</span>
      )}
    </>
  );
};

export default FilePreview;
