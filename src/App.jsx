import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-white font-extrabold text-5xl font-gotham text-center pt-5">ZENCHAT</div>


      <label for="myTextBox" className="text-white">Chat with AI: </label>
      <input className="border rounded-lg border-1 border-white border-solid bg-transparent text-white"  
      type="text" id="myTextBox" name="myTextBox" size = "100" placeholder="Enter Text Here" readonly></input>
      

    </>
  )
}

export default App
