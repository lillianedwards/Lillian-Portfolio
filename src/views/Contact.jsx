import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {Form, Button} from 'react-bootstrap';

function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_c11h62j',
    'template_ip3tmcj',
    e.target,
    'PLACEHOLDER'
  )
  .then((result) => {
    console.log('email sent successfully');
  }, (error) => {
    console.log('Failed to send email:', error);
  });
};


  return (
    
    
    <div className=' container contactCard'>
      <div className='row'>
      <div className='col-12 d-flex justify-content-center'>
      <Form onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label className='contactLabel'>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='contactInput'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='contactLabel'>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='contactInput'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className='contactLabel'>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className='contactInput '
          />
        </Form.Group>
        <Button className='contactBtn' type="submit">
          Send
        </Button>
      </Form>
      </div>
      </div>
    </div>
  )
}

export default Contact