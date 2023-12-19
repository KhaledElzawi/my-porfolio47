import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {LiaFacebookMessenger} from 'react-icons/lia'
import {SiWhatsapp} from 'react-icons/si'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
       
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_flj7akq', 'template_z5b0ulp', form.current, 'Jx4LrxKdbSCBPgx9-')

    e.target.reset()
     
  };
    

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
           <article className="contact_option">
               <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>kh.elzawi@gmail.com</h5>
            <a href="mailto:kh.elzawi@gmail.com" target="_blank">Send a message</a>
           </article>

           <article className="contact_option">
               <LiaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Khaled Elzawi</h5>
            <a href="https://m.me/profile.php?id=100005158877078" target="_blank">Send a message</a>
           </article>


           <article className="contact_option">
               <SiWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+218945534161</h5>
            <a href="https://api.whatsapp.com/send?phone=+218945534161"  target="_blank">Send a message</a>
           </article>
        </div>
        {/* End of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact