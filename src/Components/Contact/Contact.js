import React from 'react';
import './Contact.css';
import ContactCard from './ContactCard/ContactCard';
import Quotes from './Quotes/Quotes';

function Contact() {
  return (
    <section>
      <div className='contact-section' id='contact'>
        <div className='sections-header-container'>
          <div className='header-line' />
          <h1 className='sections-main-header'>Contact</h1>
          <div className='header-line' />
        </div>
        <div className='contact-content'>
          <div className='contact-info'>
            <Quotes />
          </div>
          <ContactCard text={"Send me a message"}/>
        </div>
      </div>
    </section>
  )
}

export default Contact;