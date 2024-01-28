import React, { useState } from 'react';
import TextGeneration from './TextGeneration';
import '../App.css'


export default function InputText() {

    const [inputValue, setInputValue] = useState('');
    const [savedValue, setSavedValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSavedValue(inputValue);
            addToChat();
            setInputValue('');
        }
    }

    function addToChat() {
        const userInput = document.createElement('div');
        userInput.innerHTML = inputValue;
        userInput.classList.add('userInput');

        chatGPTGeneration();
        
        const message = document.querySelector('#messages');
        message.appendChild(userInput);
    }

    const chatGPTGeneration = () => {

    }

    return (
        <>
            <input className="min-w-0 px-5 py-3 border rounded-3xl border-white bg-transparent text-white transition duration-100 hover:shadow-md hover:scale-105" type="text" id="myTextBox" name="myTextBox" size="100" placeholder="Enter Your Thoughts Here" 
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </>
    );
};
