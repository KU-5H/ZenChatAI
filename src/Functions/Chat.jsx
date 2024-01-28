// Chat.js
import React, { useState } from 'react';
import TextGeneration from './TextGeneration';
import '../App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, Message, TypingIndicator } from '@chatscope/chat-ui-kit-react'




export default function Chat() {

    const [messages, setMessages] = useState([
        {
            message: "Hello, I am ChatGPT",
            sender: "ChatGPT"
        }
    ]) // []

    const handleSend = (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];

        //UIpdate MEssage State
        setMessages(newMessages)

        //API Call
    }

    return (
        <>
            <div className=''>
                <div className='w-full mx-auto sm:w-2/3 lg:w-1/2 xl:w-3/5 max-h-800'>
                    <MainContainer>
                        <ChatContainer >
                            <MessageList>
                                {messages.map((message, i) => {
                                    return <Message key={i} model={message} />
                                })}
                            </MessageList>
                            <MessageInput placeholder='Type Message Here' onSend={handleSend}/>
                        </ChatContainer>
                    </MainContainer>
                </div>
            </div>
            
        </>
    );
};
