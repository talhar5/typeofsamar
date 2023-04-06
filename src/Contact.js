import React from 'react';

export default function Contact() {
  return (
    <div className='contact-section'>
      <div className='contacts'>
        <div className='contact-line'>
          <i class="fa-regular fa-envelope fa-lg"></i> trazzaq9@gmail.com
        </div>
        <div className='contact-line'>
          <i class="fa-brands fa-whatsapp fa-lg"></i> +92-301-7681731
        </div>
      </div>

      <div className='social-contacts'>
        <a href='https://www.twitter.com/1talha_pk' target='blank'>
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </a>
        <a href='https://www.twitter.com/2talhapk' target='blank'>
          <i class="fa-regular fa-envelope fa-2xl"></i>
        </a>
      </div>
    </div>
  )
}
