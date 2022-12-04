import React from 'react';

export default function Navigation({content, handleContentChange}) {

  return (
    <nav>
        <a href="#about" onClick={() => handleContentChange('About')}>About</a>
        <a href="#portfolio" onClick={() => handleContentChange('Portfolio')}>Portfolio</a>
        <a href="#resume" onClick={() => handleContentChange('Resume')}>Resume</a>
        <a href="#contact" onClick={() => handleContentChange('Contact')}>Contact</a>
    </nav>
  );
}