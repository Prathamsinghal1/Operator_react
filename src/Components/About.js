import React, { useState } from 'react'

export default function About() {

    const [myStyle,setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [text,newText] = useState("Dark Mode");
    
    const clickDarkMode=() => {
        if(myStyle.color==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            newText("Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'    
            })
            newText("Dark Mode")
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the first item's. </strong>This tools offers a collection of useful string manipulation utilities. All string tools are simple and easy to use, and they all work exactly the same way – you just have to load your string in the input area of a tool and you'll instantly get the result in the output area.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the second item's. </strong> All string tools focus on getting things done as fast as possible and have the exactly the same user interface. You just have to learn how to use one of the tools and you'll immediately know how to use all of them.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>This is the third item's. </strong> When you work with our string tools, we don't send the strings you load in the input (or get in the output) to our servers. Everything is done locally on your computer and the data never leaves your browser. As we like say – what happens in your browser, stays in your browser.
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-success my-2" onClick={clickDarkMode}>Enable {text}</button>
    </div>
  )
}
