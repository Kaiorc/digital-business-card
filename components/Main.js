import React from "react"
import ReactDOM from "react-dom"


export default function Main(){
    return(
        <main>
            <div className="main--div1">
                <div className="main--informations">
                    <h1 className="main--informations-h1">Laura Smith</h1>
                    <h3 className="main--informations-h3">Frontend Developer</h3>
                    <p className="main--informations-p">laurasmith.website</p> 
                </div>
                <div className="main--contacts-btns">
                    <button className="main--contacts-btn-email">
                        <img src="./images/mail-icon.png" className="main--contacts-btn-email-icon"/>
                        Email
                    </button>
                    <button className="main--contacts-btn-linkedin">
                        <img src="./images/linkedin-icon.png"className="main--contacts-btn-linkedin-icon"/>
                        LinkedIn
                    </button>
                </div>
            </div>
            <div className="main--texts">
                <h3 className="main--texts-h3">About</h3>
                <p className="main--texts-p-1">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h3 className="main--texts-h3">Interests</h3>
                <p className="main--texts-p-2">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </main>
    )
}