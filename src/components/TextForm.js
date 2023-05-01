import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText =text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")

  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")


  }
  const handleClearClick = () =>{
    
    setText('');
    props.showAlert("Text Cleared", "success")


  }
  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value);

  }
  const handleCopy=()=>{
    console.log("I am a copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success")
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed", "success")

  }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} 
        value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
 
    </div>
    </>
  )
}