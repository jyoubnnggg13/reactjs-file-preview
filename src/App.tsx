import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FilePreview from './FilePreview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FilePreview preview='https://the7eagles.com/wp-content/uploads/2024/05/What-is-an-Image-URL.webp'/>
    </>
  )
}

export default App
