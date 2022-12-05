import React from 'react';
import Navigation from './Navigation';
import './css/Header.css';

const myName = 'Sripriya Bhikshesvaran';

export default function Header({content, handleContentChange}) {
  return (
    <header className='header'>
      <h1>{myName}</h1>
      <Navigation content={content} handleContentChange={handleContentChange}/>
    </header>
  );
}