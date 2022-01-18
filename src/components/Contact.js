import React from 'react';
//import { validateEmail } from '../../utils/helpers';
import '../styles/contact.css';
import { Form, Input, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'dotenv';
import { FaPaperPlane } from 'react-icons/fa';
import{ init } from '@emailjs/browser';
require('dotenv').config();
/**implement 'role' tag for screen readers */

function ContactForm() {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;


  const handleOnSubmit = (e) => {
  

    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <section className='contact'>
      <h1 className='section-title'>CONTACT</h1>
      <div className='contact-container'>
      <Form onSubmit={handleOnSubmit} className='contact-form'>
        <Form.Field
          id='form-input-control-email'
          className='form-control'
          control={Input}
          label='Email'
          name='email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          className='form-control'
          control={Input}
          label='Name'
          name='name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          className='form-control'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i> <FaPaperPlane/></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      </Form>
      </div>
    </section>
  );
}

export default ContactForm;