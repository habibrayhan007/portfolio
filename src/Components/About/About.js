import React from 'react'
import '../About/About.css';
import rayhan from '../../Images/rayhan.jpg'
import PageHeader from '../PageHeader/PageHeader';

export default function About() {
    return (
        <div className="AboutMe">
            <PageHeader title={'About Me'}/>
            <div className="container">
                <div className="text">
                    <h2>Hello, I'm Habib</h2>
                    <p>
                        I am a software Engineer based in the Bangladesh.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="photo">
                    <img className="me" src={rayhan} alt="rayhan"></img>
                </div>
            </div> 
        </div>
    )
}