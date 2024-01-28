// InputText.js
import React, { useState } from 'react';
import TextGeneration from './TextGeneration';
import '../App.css'
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'




export default function InputText() {

    const [inputValue, setInputValue] = useState('');
    const [savedValue, setSavedValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSavedValue(inputValue);
            setInputValue('');
            TextGeneration(savedValue);
        }
    }

    return (
        <>
            <input className="min-w-0 px-5 py-3 border rounded-3xl border-white bg-transparent text-white transition duration-100 hover:shadow-md hover:scale-105" type="text" id="myTextBox" name="myTextBox" size="100" placeholder="Enter Your Thoughts Here" readonly 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};
