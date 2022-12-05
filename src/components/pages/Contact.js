import React, { useState } from "react";
import '../css/Contact.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  const styles = {
    "background": "#F2F5EA"
  }

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [invalidEmailText, setInvalidEmailText] = useState('Please enter a valid email address');

  const re = /.+@.+\..+/;

  const handleNameChange = (event) => setNameValue(event.target.value);
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    if (!re.test(event.target.value)) {
      setInvalidEmailText('Email invalid value');
    } else {
      setInvalidEmailText('Your email id will be kept private');
    }

  }
  const handleMessageChange = (event) => setMessageValue(event.target.value);

  const handleContactForm = (event) => {
    event.preventDefault();
    console.log(`${nameValue} contacted you. Email: ${emailValue} Message: ${messageValue}`);
    setInvalidEmailText('');
  };

  return (
    <div className="form">
    <Form className="p-5" style={styles} onSubmit={handleContactForm}>
      <Form.Group className="w-75 mb-3" id="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="string" placeholder="Enter your name" onChange={handleNameChange}/>
      </Form.Group>
      <Form.Group className="w-75 mb-3" id="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter an email address" onChange={handleEmailChange}/>
        <Form.Text className="text-muted">
          {invalidEmailText}
        </Form.Text>
      </Form.Group>
      <Form.Group className="w-75 mb-3" id="message">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Your message goes here ..." onChange={handleMessageChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}