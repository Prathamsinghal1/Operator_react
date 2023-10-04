import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        if(text===""){
            props.showAlert("No Text","warning");
        }
        else{
            setText(text.toUpperCase());
            props.showAlert("Converted to Uppercase","success");
        }
    }
    const handleDownClick = ()=>{
        if(text===""){
            props.showAlert("No Text","warning");
        }
        else{
            setText(text.toLowerCase());
            props.showAlert("Converted to Lowercase","success");
        }
    }

    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        if(text===""){
            props.showAlert("No Text","warning");
        }
        else{
            setText("");
            props.showAlert("Copies to Clipboard","success");
        }
    }

    const handleCapitalClick = ()=>{
        if(text===""){
            props.showAlert("No Text","warning");
        }
        else{
            let s="";
            for(let i=0;i<text.split(" ").length;i++){
                let str=text.split(" ")[i];
                s+=str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
                s+=' ';
            }
            let str="";
            for(let i=0;i<s.split("\n").length;i++){
                let k=s.split("\n")[i];
                str+=k.charAt(0).toUpperCase() + k.slice(1);
                str+='\n';
            }
            setText(str);
            props.showAlert("Capitalize text","success");
        }
    }

    const copyText = ()=>{
        navigator.clipboard.writeText(text);
        if(text===""){
            props.showAlert("No Text","warning");
        }
        else{
            props.showAlert("Text copied","success");
        }
    }

    const removeExtraSpaces = ()=>{
        if(text===""){
            props.showAlert("No Text","warning");
        }
        else{
            setText(text.split(/[ ]+/).join(" "));
            props.showAlert("Extra spaces removed","success");
        }
    }


    const [text, setText] = useState("");
  return (
    <>
        <div className="container my-3">
            <h1 className="form-label my-3" style={{color: ((props.mode!=='light' && props.mode!=='yellow' && props.mode!=='cyan')?'white':'#08175b')}}>Enter The Text You Want To Enter</h1>
            <textarea className="form-control my-3" value={text} onChange={onChangeHandler} id="mybox" rows="8" style={{backgroundColor: (props.mode==='dark'?'grey':'white'), color: (props.mode==='dark'?'rgba(205,142,243,1)':'#042743')}}></textarea>
            <button className={`btn btn-${(props.mode==='green' || props.mode==='red' || props.mode==='blue')?'warning':'success'} my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${(props.mode==='green' || props.mode==='red' || props.mode==='blue')?'warning':'success'} my-2 mx-2`} onClick={handleDownClick}>Convert to Lowercase</button>
            <button className={`btn btn-${(props.mode==='green' || props.mode==='red' || props.mode==='blue')?'warning':'success'} my-2 `} onClick={handleCapitalClick}>Capitalize Text</button>
            <button className={`btn btn-${(props.mode==='green' || props.mode==='red' || props.mode==='blue')?'warning':'success'} my-2 mx-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className={`btn btn-${(props.mode==='green' || props.mode==='red' || props.mode==='blue')?'warning':'success'} my-2 `} onClick={copyText}>Copy Text</button>
            <button className={`btn btn-${(props.mode==='green' || props.mode==='red' || props.mode==='blue')?'warning':'success'} my-2 mx-2`} onClick={handleClearClick}>Clear Text</button>
        </div>
        
        <div className='container my2' style={{color: ((props.mode!=='light' && props.mode!=='yellow' && props.mode!=='cyan')?'white':'#08175b')}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h5>Time taken to read above text:</h5>
            <p>{1/125 * text.split(" ").length} minutes or {1/125*60 * text.split(" ").length} seconds</p>
            <h4>Preview:</h4>
            <p>{text.length===0?'Enter the text above to preview here':text }</p>
        </div>

    </>
  )
}

TextForm.propTypes={title: PropTypes.string.isRequired,
    mode: PropTypes.string
}

TextForm.defaultProps={
    title: "vdv",
    mode: "light"
} 
