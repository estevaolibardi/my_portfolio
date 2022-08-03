import { StyledContactForm, Container } from './styles';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sa6qln4',
        'template_lnofgb9',
        form.current,
        'R33INPTBeDOqsfbNv'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <StyledContactForm>
        <h2>Entre em Contato</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Mensagem</label>
          <textarea name="message" required />
          <button type="submit"> Enviar </button>
        </form>
      </StyledContactForm>
    </Container>
  );
};

export default ContactMe;
