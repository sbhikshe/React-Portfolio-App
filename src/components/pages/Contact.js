import React from "react";
import '../css/Contact.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  const styles = {
    "background": "#F2F5EA"
  }
  return (
    <div className="form">
    <Form className="p-5" style={styles}>
      <Form.Group className="w-75 mb-3" id="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="string" placeholder="Enter your name"/>
      </Form.Group>
      <Form.Group className="w-75 mb-3" id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter a valid email address"/>
      </Form.Group>
      <Form.Group className="w-75 mb-3" id="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Your message goes here ..."/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}