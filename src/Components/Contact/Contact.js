import React from 'react'
import '../Contact/Contact.css'
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

const handleURL=(url)=>{
    return()=>window.open(url, "_blank")
}



export default function Contact() {
    return (
        <div className="Contact">
            <div className="ContactIcons">
                <FaGithub color='white' size='70px' style={{padding:'1%'}}
                onClick={handleURL('https://github.com/habibrayhan007')}/>
            
                <FaLinkedin color='white' size='70px' style={{padding:'1%'}}
                onClick={handleURL('https://www.linkedin.com/in/habibrayhan007/')}/>

                <FaYoutube color='white' size='70px' style={{padding:'1%'}}
                onClick={handleURL('https://www.youtube.com/channel/UCPS-rFhcjcS8BoTGoDhAiPw')}/>

                <FaFacebook color='white' size='70px' style={{padding:'1%'}}
                onClick={handleURL('https://www.facebook.com/habibrayhan007/')}/>
            
                <FaInstagram color='white' size='70px' style={{padding:'1%'}}
                onClick={handleURL('https://www.instagram.com/habibrayhan007/')}/>

            </div>
        </div>
    )
}
