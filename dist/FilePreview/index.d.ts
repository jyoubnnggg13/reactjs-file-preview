import { default as React } from 'react';
interface FilePreviewProps {
    preview: string | File;
    clarity?: number;
    placeHolderImage?: string;
    errorImage?: string;
    fileType?: string;
    axiosInstance?: any;
    getLoader?: () => React.ReactNode;
}
declare const FilePreview: React.FC<FilePreviewProps>;
export default FilePreview;
