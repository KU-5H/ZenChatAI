import React, { useState } from 'react';
import TextGeneration from './TextGeneration';
import '../App.css'
import mentalHealthPrompts from './mentalPrompts';
import mentalHealthWords from './mentalWords';
import axios from 'axios';


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
        userInput.className = 'text-right p3';
        
        const message = document.querySelector('#messages');
        message.appendChild(userInput);

        chatGPTGeneration(true)

    }

    const chatGPTGeneration = (operate) => {
        const randomIndex = Math.floor(Math.random() * mentalHealthPrompts.length);
        const option = mentalHealthPrompts[randomIndex];
        
        
        const pcInput = document.createElement('div');
        if(operate) {
            pcInput.innerHTML = option;
        } else {
            pcInput.innerHTML = "Sorry, that dosen't really have to do with Mental Health. Please try a different prompt";
        }
        pcInput.className = 'text-left p-3';

        const message = document.querySelector('#messages');
        message.appendChild(pcInput);
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
