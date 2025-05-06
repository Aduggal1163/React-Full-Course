import React, { useRef } from 'react';

export default function App() {
    const inputRef = useRef();
    function onsubmit(e) {
        e.preventDefault();
        // document.getElementById("text").focus();
        inputRef.current.focus();
        console.log("Submitted")
    }
    return (
        <div className='App'>
            <h1>Hello React.</h1>
            <input
                ref={inputRef}
                id="text" type="text" />
            <input type="password" />
            <button onClick={onsubmit}>Submit</button>
        </div>
    );
}