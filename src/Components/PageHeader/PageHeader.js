import React from 'react'
import '../PageHeader/PageHeader.css';

export default function PageHeader(props) {
    return (
        <div className="head">
            <hr/>
            <h1 className="title">{props.title}</h1>
            
        </div>
    )
}
