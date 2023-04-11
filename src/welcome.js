import React, { useEffect } from 'react'

export default function Welcome() {
  
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".fade-in").classList.add("fade-in-active");
    }, 50);
  }, [])

  return (
    <div className='welcome-section fade-in'>
      <h2>Hi, <i className="fa-regular fa-handshake"></i></h2>
      <p>I'm Talha, a driven front-end developer looking to exhibit my talents and abilities in a challenging work environment. I am an expert in React.js, node.js, JavaScript, OOP, git and GitHub, HTML and CSS, and I am excited to contribute to a dynamic team.</p>
    </div>

  )
}
