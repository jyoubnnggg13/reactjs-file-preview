import './App.css'
import FilePreview from './FilePreview'

function App() {

  return (
<div
  style={{
    position: "relative",
    width: "500px",
    height: "500px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  }}
>
  {/* <FilePreview
    preview="https://picsum.photos/200/300"
  /> */}
  <FilePreview 
  preview="https://example.com/sample.jp"
  placeHolderImage="https://example.com/placeholder.png"
  errorImage="https://picsum.photos/200/300"
/>
</div>

  )
}

export default App
