import React from 'react'
import '../Home/Home.css';
import code from './../../Images/code.png'
import binary from './../../Images/binary.png'

export default function () {
    return (
        <div className="Home" id="home">
            <div className="Container">
                <h1 className="Hello">Hello World</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className="code" src={code} alt="code"></img>
            <img className="binary" src={binary} alt="binary"></img>
        </div>
    )
}