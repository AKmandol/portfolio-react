import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


export const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("result.text");
    emailjs.sendForm('service_37tb2af', 'template_ar5nd5n', form.current, 'J9s0aqd-louZ2SBCt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
              <article className="contact-option">
                <HiOutlineMail className='contact-icon'/>
                <h4>Email</h4>
                <h5>amlankumar47@gmail.com</h5>
                <a href="mailto:amlankumar47@gmail.com">Send a Email</a>
              </article>
              <article className="contact-option">
                <RiMessengerLine className='contact-icon'/>
                <h4>Messenger</h4>
                <h5>Amlan Kumar Mandol</h5>
                <a href="https://m.me/amlan.mandol">Send a Message</a>
              </article>
              <article className="contact-option">
                <BsWhatsapp className='contact-icon'/>
                <h4>WhatsApp</h4>
                <h5>+8801733472747</h5>
                <a href="https://api.whatsapp.com/send?phone=+880173347247">Send a Message</a>
              </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Name' required/>
         <input type="email" name='email' placeholder='Your Email' required/>
         <input type="text" name='subject' placeholder='Email Subject (Optional)'/>
         <textarea name="msg" rows="14" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact