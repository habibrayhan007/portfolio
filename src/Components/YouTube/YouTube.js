import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import '../../Components/YouTube/YouTube.css'
import objectDetection from '../../Images/rtod.PNG'
import Lsast from '../../Images/lsats.png'
import Agd from '../../Images/agd.jpg'
import background from '../../Images/background.jpg'

const platBtn = (url) =>{
    return(
        <div className="playButton"
            onClick={(e) => window.open(url, "_blank").focus}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
                <path class="play-btn__svg" d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"/>
            </svg>
        </div>
    )
}

const youtubeVideo = (url, thumbnail, description) =>{
    return(
        <div className="VideoContainer">
            <div className="Thumbnail">
                {platBtn(url)}
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className="text">
                <p>{description}</p>
            </div>
        </div>
    )
}

const objectDetectionDescription= 'In this video I will run the code and then discuss the code. You will find here what you need for detect a object through webcam.'

const LsastDescription='In this video I will try to explore Lifespan Age Transformation Synthesis. If you saw the full video then you will be able to do this.'

const agdDescription='In this video we worked with Age and Gender Detection system using OpenCV, Python and Machine_Learning (pre-trained weights).'

export default function YouTube() {
    return (
        <div className="YouTube">
            <img className="Background" src={background} alt="backgrounr"/>
            <PageHeader title={"I'm Also on YouTube"}></PageHeader>
             <div className="YouTubeContent">
                <div className="paragraph">
                    <p>
                        On my channel you will find videos about programming related stuff.
                        since that's what I like. Check out some of my latests videos. If you
                        like what you see then please subscribe.
                    </p>
                </div>
                <div className="Videos">
                    {youtubeVideo("https://youtu.be/LyKTf9Vq8MA", objectDetection, objectDetectionDescription)}
                    {youtubeVideo("https://youtu.be/yZHxy_zsevA", Lsast, LsastDescription)}
                    {youtubeVideo("https://youtu.be/qRF_XZ5OiXg", Agd, agdDescription)}


                </div>
            </div>
        </div>
    )
}
