import React from 'react';
import Navigation from './Navigation';

const myName = 'Sripriya Bhikshesvaran';

export default function Header() {
  return (
    <header>
      {myName}
      <Navigation />
    </header>
  );
}