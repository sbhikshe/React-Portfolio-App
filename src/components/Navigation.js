import React from 'react';
import './css/Navigation.css';

export default function Navigation({content, handleContentChange}) {

  return (
    <nav className='navigation'>
        <a href="#about" 
          onClick={() => handleContentChange('About')}
          className={content === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
        <a href="#portfolio" 
          onClick={() => handleContentChange('Portfolio')}
          className={content === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </a>
        <a href="#resume" onClick={() => handleContentChange('Resume')}
          className={content === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </a>
        <a href="#contact" onClick={() => handleContentChange('Contact')}
          className={content === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </a>
    </nav>
  );
}