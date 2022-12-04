import React from 'react';
import Navigation from './Navigation';

const myName = 'Sripriya Bhikshesvaran';

export default function Header({content, handleContentChange}) {
  return (
    <header>
      {myName}
      <Navigation content={content} handleContentChange={handleContentChange}/>
    </header>
  );
}