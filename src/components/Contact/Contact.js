import React from 'react';
//import { validateEmail } from '../../utils/helpers';
import { Form, Input, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'dotenv';

/**implement 'role' tag for screen readers */
const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;
function ContactForm() {

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
          name='user_email'
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
          name='user_name'
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
          name='user_message'
          placeholder='Message…'
          required
        />
        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      </Form>
      </div>
    </section>
  );
}

export default ContactForm;