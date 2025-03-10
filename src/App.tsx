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
  <FilePreview
    preview="https://apis.zopper.com/media/0qG_CxosjaZF67vXDz0Sxg=="
  />
</div>

  )
}

export default App
