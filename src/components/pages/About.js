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
import ProfilePic from './images/ProfilePic.png';
import AgileLogo from './images/Agile.png';
import MVCLogo from './images/MVC.png';
import jQueryLogo from './images/jQuery.png';

export default function About() {
  const imgStyles = {
    "width": "200px",
    "padding": "20px"
  }
  
  return (
    <Container fluid>
      <Row>
      <Col className="description col-6">
        <img src={ProfilePic} alt="ProfilePic" style={imgStyles}/>
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
          <img src={HTMLCSSJSLogo} alt="HTMLCSSJS" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={SequelizeLogo} alt="SQL" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={ExpressLogo} alt="Express" style={imgStyles}/>
          </Col>
          </Row>
          <Row>
          <Col className="col-4">
          <img src={ReactLogo} alt="React" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={MongoDBLogo} alt="MongoDB" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={NodeJSLogo} alt="Node" style={imgStyles}/>
          </Col>
          </Row>
          <Row>
          <Col className="col-4">
          <img src={AgileLogo} alt="React" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={MVCLogo} alt="MongoDB" style={imgStyles}/>
          </Col>
          <Col className="col-4">
          <img src={jQueryLogo} alt="Node" style={imgStyles}/>
          </Col>
          </Row>
        </Container>
      </Col>
      </Row>
    </Container>
  );

}