// TextInput.js
import React, { useState } from 'react';
import classNames from 'classnames';
import '../App.css'

export default function CheckList() {
    const [toggle, setToggled] = useState(false);

    return (
        <label id='micButton' className={classNames("inline-block p-3.5 cursor-pointer border-none rounded-3xl text-white bg-gray-700 transition duration-300 width-[72%] hover:scale-105 hover:text-gray-800 hover:bg-gray-400 active:scale-100", 
        {"bg-gray-300" : toggle})}>
            <input className='hidden' type="checkbox" id="mic" onClick={() => {setToggled(!toggle)}}/> 
            <img className='min-w-5 w-5 h-5 min-h-5' src='../src/assets/voice-message-microphone-button.png'/>
        </label>
    );
};
