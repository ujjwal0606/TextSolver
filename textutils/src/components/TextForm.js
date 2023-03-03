
// google  se lekt aaya yeh  hooks intro---
import React, { useState } from 'react'

export default function TextForm(props) {
        const handleUpclick = () => {
                console.log("Upper was clicked");
                // setText('You have clickd on handleupclick' +text)
                let newText = text.toUpperCase();
                setText(newText);
                props.showAlert("converted to uppercase", "success");
               
        }
        const handleLoclick = () => {
                console.log("lower was clicked");
                // setText('You have clickd on handleupclick' +text)
                let newText = text.toLowerCase();
                setText(newText);
                props.showAlert("converted to lowercase", "success");
               
        }
        const handleClearclick = () => {
                console.log("clear was clicked");
                // setText('You have clickd on handleupclick' +text)
                let newText ='';  // es mai text blank kr diya jisse clear text krenge to clear ho jayega 
                setText(newText);
                props.showAlert("clear text", "success");
        }
        const handleOnChange = (event) => {
                console.log("On change");
                setText(event.target.value);
                
        }
        // copy all text------
        const handleCopy = (event)=>{
                console.log("i am copy")
                var text = document.getElementById('myBox');
                text.select();
                navigator.clipboard.writeText(text.value);
                props.showAlert("copied to clickboard", "success");
        }
        const handleExtraSpaces = () =>{
                let newText = text.split(/[ ]+/);
                setText(newText.join(" "));
                props.showAlert("removed the all extra spaces", "success");
        }
        const [text, setText] = useState('');
        // text ="new text";  wrong way to change the state
        // setText =("new text"); correct way to change the state
        return (
                <>
                <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
                        <h1>{props.heading}</h1>
                        <div className="mb-3">

                                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black' }}id="myBox" rows="5"></textarea>
                                {/* double coulibrace object k liye use kiye h */}
                        </div>
                        <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
                        <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                        <button className="btn btn-primary mx-1" onClick={handleClearclick}>clear text</button>
                        <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
                        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
                {/* -------------------------------------------------------------------------- */}
                <div className='container my-3'style={{color: props.mode==='dark'?'white':'black'}}>
                        <h2>your text summary</h2>
                        {/* {ṭext.length}  ----   se number count honge ki kitne character type kiey  hai */}

                        {/* {text.split(" ").length} ---- yeh kren se word count honge */}
                        <p> {text.split(" ").length}words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read </p>
                        <h2>Preview</h2>
                        <p>{text.length>0?text:'Enter something in the textbox about to preview it here'}</p>
                </div>
                </>
        )
}
