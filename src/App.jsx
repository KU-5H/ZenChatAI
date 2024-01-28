import { useState } from 'react'
import './App.css'
import './Functions/CheckList'
import Checkbox from './Functions/CheckList'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div className="text-white font-bold text-5xl text-center pt-5 font-roboto">ZENCHAT</div>

      <div id='output-text'></div>

      <div class="flex justify-center gap-5 h-30 fixed left-0 bottom-0 w-full text-white p-5">
        <input className="min-w-0 px-5 py-3 border rounded-3xl border-white bg-transparent text-white transition duration-100 hover:shadow-md hover:scale-105" type="text" id="myTextBox" name="myTextBox" size="100" placeholder="Enter Your Thoughts Here" readonly />
        <Checkbox />
      </div>
    </>
  )
}



export default App