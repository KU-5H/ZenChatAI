import { useState } from 'react'
import './App.css'
import InputText from './Functions/InputText'
import Checkbox from './Functions/CheckList'
import TextGeneration from './Functions/TextGeneration'
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'

function App() {
  return (
    <>
      <div className="text-white font-bold text-5xl text-center pt-5 font-roboto">ZENCHAT</div>

      <div class="flex justify-center gap-5 h-30 fixed left-0 bottom-0 w-full text-white p-5">
        <InputText />
        <Checkbox />
      </div>
    </>
  )
}



export default App