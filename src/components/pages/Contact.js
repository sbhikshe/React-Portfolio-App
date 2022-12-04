import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <Form>
      <Form.Group className="mb-3" id="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="string" placeholder="Enter your name"/>
      </Form.Group>
      <Form.Group className="mb-3" id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter a valid email address"/>
      </Form.Group>
      <Form.Group className="mb-3" id="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Your message goes here ..."/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}