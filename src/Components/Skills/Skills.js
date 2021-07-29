import React from 'react'
import '../Skills/Skills.css'
import PageHeader from '../PageHeader/PageHeader'
import CodeThinking from '../../Images/CodeThinking.jpg'

const lisTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom:'4px'}

const backendSkills =
    <ul>
        <li style={ lisTitleStyle } >BACKEND</li>
        <li>Scala - Java - SQL</li>
        <li>AKKA - Spring Boot - Slick</li>
    </ul>

const fronfendSkills =
    <ul>
        <li style={ lisTitleStyle }>FrontEnd</li>
        <li>ReactJS - HTML - CSS - Redux</li>
        
    </ul>

const messagingSkills =
    <ul>
        <li style={ lisTitleStyle }>MESSAGING</li>
        <li>ActiveMQ</li>

    </ul>

const dataScienceSkills =
    <ul>
            <li style={ lisTitleStyle }>DATA SCIENCE TOOLS</li>
            <li>ELK Stack - Apache Spark</li>
            
    </ul>

const buildToolsSkills =
    <ul>
            <li style={ lisTitleStyle }>BUILD TOOLS</li>
            <li>Maven - SBT</li>
            
    </ul>

const otherSkills =
    <ul>
                <li style={ lisTitleStyle }>OTHER</li>
                <li>Git - Docker - Jenkins - Json -XML</li>
                
    </ul>

const totalSkills = [backendSkills, fronfendSkills, messagingSkills, dataScienceSkills, buildToolsSkills, otherSkills]

export default function Skills() {
    return (
        <div className="Skills">
            <PageHeader title={'What About Skills'}/>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        
            </p>
            <div className="Container">
                <div className="Image">
                    <img src={CodeThinking} alt="CodeThinking"/>
                </div>
                {totalSkills.map(Skills =>{
                   return(
                       <div className="List">
                           {Skills}
                       </div>
                   ) 
                })}
            </div>
        </div>
    )
}
