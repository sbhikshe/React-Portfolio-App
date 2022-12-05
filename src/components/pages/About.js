import React, { useState } from "react";
import '../css/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HTMLCSSJSLogo from './images/HTMLCSSJSLogo.png';
import NodeJSLogo from './images/NodeJSLogo.png';
import MongoDBLogo from './images/MongoDBLogo.png';
import ExpressLogo from './images/ExpressLogo.png';
import SequelizeLogo from './images/SequelizeLogo.png';
import ReactLogo from './images/ReactLogo.png';


export default function About() {
  const imgStyles = {
    "width": "200px",
    "padding": "20px"
  }
  /*
  const logos = [
    {HTMLLogo}, 
    {CSSLogo},
    {JSLogo},
    {NodeJSLogo},
    {ReactLogo}
  ];
  
  const [currentIndex, setIndex] = useState[0];

  const handleNext = () => { 
    if (currentIndex < logos.length -1) {
      setIndex(currentIndex +1)
    } else {
      setIndex(0);
    }
  };
  */
  return (
    <Container fluid>
      <Row>
      <Col className="description col-6">
        <p>
        A full stack web developer, I love to learn new technologies and create cool and meaningful applications!  
        </p>
        <p>
        With a background in Computer Science, I've worked in telecommunications and mobile software
        implementing location services for GSM, and audio support, browser and user interface features for mobile phones. 
        </p>
        <p>
        I enjoy the process of designing and realizing an idea from concept to a fully functional product. 
        </p>
        <p>
        In my spare time, I love to be outdoors with my family, and volunteer for organizations that serve local communities.
        </p>       
      </Col>
      <Col className="animation col-6">
        <Container fluid>
          <Row>
          <Col className="col-4">
          <img src={HTMLCSSJSLogo} alt="React" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={SequelizeLogo} alt="React" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={ExpressLogo} alt="React" style={imgStyles}/>
          </Col>
          </Row>
          <Row>
          <Col className="col-4">
          <img src={ReactLogo} alt="React" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={MongoDBLogo} alt="React" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={NodeJSLogo} alt="React" style={imgStyles}/>
          </Col>
          </Row>
        </Container>
      </Col>
      </Row>
    </Container>
  );

  /*
      <img src={logos[currentIndex]} alt="React" style={imgStyles}/>
      <button onClick={handleNext}></button>
  */
}