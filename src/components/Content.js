import React, { useState } from "react";
import About from './pages/About';
import PortFolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from "./Header";
import Footer from "./Footer";

export default function Content() {

  const [content, setContent] = useState('About');

  const renderContent = () => {
    if(content === 'About') {
      return <About />;
    }
    if(content === 'Portfolio') {
      return <PortFolio />;
    }    
    if(content === 'Resume') {
      return <Resume />;
    }
    if(content === 'Contact') {
      return <Contact />;
    }
  }

  const handleContentChange = (newContent) => setContent(newContent);

  return (
    <>
      <Header content={content} handleContentChange={handleContentChange} />
      <div className="body">
      {renderContent()}
      </div>
      <Footer />
    </>
  );
}