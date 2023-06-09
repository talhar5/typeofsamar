import React, { useEffect } from 'react';

export default function Contact() {

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".fade-in").classList.add("fade-in-active");
    }, 50);
  }, [])

  return (
    <div className='contact-section fade-in'>
      <div className='contacts'>
        <div className='contact-line'>
          <i className="fa-regular fa-envelope fa-lg"></i> trazzaq9@gmail.com
        </div>
        <div className='contact-line'>
          <i className="fa-brands fa-whatsapp fa-lg"></i> +92-301-7681731
        </div>
      </div>

      <div className='social-contacts'>
        <a href='https://www.twitter.com/1talha_pk' target='_blank' rel="noopener noreferrer">
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </a>
        <a href='https://github.com/talhar5' target='_blank' rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-2xl"></i>
        </a>
      </div>
    </div>
  )
}
