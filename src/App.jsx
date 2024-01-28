import { useState } from 'react'
import './App.css'
import InputText from './Functions/InputText'
import CheckList from './Functions/CheckList'
import TextGeneration from './Functions/TextGeneration'


function App() {




  

  return (
    <>
      <div className="text-white font-bold text-5xl text-center pt-5 font-roboto">ZENCHAT</div>

      <div id='messages' className='overflow-y-auto block w-4/5  h-[70vh] mx-auto my-10  text-white p-4 rounded-lg'>
        <span></span>
      </div>


      <div id='components' className="mt-10 flex justify-center gap-5 h-30 fixed left-0 bottom-0 w-full text-white p-5">
        <InputText />
        <CheckList />
      </div>
    </>
  )
}


export default App
