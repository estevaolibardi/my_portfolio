import { StyledContactForm, Container, MailIcon } from './styles';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Icon from '../../assets/icon.svg';

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
      .then((_) => {
        toast.success('Email foi enviado!');
        document.getElementById('user_name').value = '';
        document.getElementById('user_email').value = '';
        document.getElementById('message').value = '';
      });
  };

  return (
    <>
      <MailIcon id="contact">
        <img src={Icon} />
      </MailIcon>
      <Container>
        <StyledContactForm>
          <h2>Entre em Contato</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input type="text" id="user_name" required />
            <label>Email</label>
            <input type="email" id="user_email" required />
            <label>Mensagem</label>
            <textarea id="message" required />
            <button type="submit">Enviar</button>
          </form>
        </StyledContactForm>
      </Container>
    </>
  );
};

export default ContactMe;
