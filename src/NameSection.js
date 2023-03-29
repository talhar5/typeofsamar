import { useState, useEffect } from "react"

export default function NameSection() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const [windowHeight, setwindowHeight] = useState(window.innerHeight);
    window.addEventListener('resize', () => {
        setwindowWidth(window.innerWidth);
    })

    let handleResize = () => {
        setwindowHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [windowHeight])

    return (
        <div className="name-box">
            <h1>Talha Razzaq</h1>
            <div>Front-end Developer</div>
            <div className="emailDiv">trazzaq9@gmail.com</div>
            <div>{windowWidth}</div>
            <div>{windowHeight}</div>
            
        </div>
    )
}