import { useState } from 'react'
import './App.css'
import InputText from './Functions/InputText'
import CheckList from './Functions/CheckList'
import TextGeneration from './Functions/TextGeneration'
import { BingChat } from 'bing-chat'

async function example() {
  const api = new BingChat({
    cookie: import.meta.env.BING_COOKIE='17jDgOA80aBkW55vmagyiL3nZXm_40VVMxVgxmpGscjxxL-2WeVZpHxf6shal3DoOgRjiMWhOEZulNCVn7x4CGwz3qACtaUbf7CeSrPw32Zaf3gbYPWn9y7q-MtNv_XFR3xYJYWjMUiJbNnnSbwR_9yYRnAVw08ZDNuVbDYuZozHGgXD6zLO5rU_6iPfCLUdurGr_z2sNJWzMMjP5ZhVxiA'
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}


function App() {

  example()



  

  return (
    <>
      <div className="text-white font-bold text-5xl text-center pt-5 font-roboto">ZENCHAT</div>

      <div id='messages' className='block w-1/2 max-h-800 mx-auto my-10 bg-gray-800 text-white p-4 rounded-lg text-right'></div>


      <div id='components' className="mt-10 flex justify-center gap-5 h-30 fixed left-0 bottom-0 w-full text-white p-5">
        <InputText />
        <CheckList />
      </div>
    </>
  )
}


export default App
