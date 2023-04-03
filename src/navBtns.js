import React from 'react'

export default function NavBtns({ handleClick }) {

    return (
        <div className="nav-section">
            <button value="welcome" onClick={handleClick} className="btn active">Welcome</button>
            <button value="projects" onClick={handleClick} className="btn">Projects</button>
            <button value="about-me" onClick={handleClick} className="btn">About Me</button>
            <button value="contact" onClick={handleClick} className="btn">Contact</button>
        </div>
    )
}
