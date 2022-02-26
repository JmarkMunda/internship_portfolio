import React, { useRef, useState } from 'react';
import './ContactCard.css';
import { AiOutlineSend } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

const Status = ({ message }) =>{
  return(
    <p style={{color: "rgb(0,255,255)"}}>{message}</p>
  )
}

function ContactCard({ text }) {

  const form = useRef();
  const [showStatus, setShowStatus] = useState(false);

  const sendMessage = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_2jtd6oh', 'template_jce3b6r', form.current , 'user_UexJP7woPJ7wdnBjduDUe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setShowStatus(true);

      setInterval(() => {
        setShowStatus(false);
      }, 10000);
  }

  return (
    <div className='contact-card-container'>
      <form ref={form} onSubmit={sendMessage}>
        <h4 className='contact-card-header'>{text}</h4>
        <input type='text' name='name' placeholder='Name' autoComplete='off'/>
        <input type='email' name='email' placeholder='example@gmail.com' autoComplete='off'/>
        <textarea placeholder='Write a message...' name='message' />
        <div className='submit-btn-container'>
          <button type='submit' className='submit-btn'>Send Message <AiOutlineSend id='send-icon'/></button>
          <div>{showStatus ? <Status message={"Message sent successfully!"}/> : null}</div>
        </div>
      </form>
    </div>
  )
}

export default ContactCard;