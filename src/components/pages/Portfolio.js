import React from "react";
import '../css/Portfolio.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Project from "./Project";
import projects from "./projects";

export default function PortFolio() {

  return (

    /* for each project, give title, imageUrl, ghLink, appLink as props */
    /* to generate the Project component */
    
    <Container fluid>
      <Row >
        {projects.map((item) => (
          <Col className="col-6">
            <Project title={item.title} imageUrl={item.imageUrl} ghLink={item.ghLink} appLink={item.appLink} />
          </Col>
        ))}
      </Row>

    </Container>

  );
}