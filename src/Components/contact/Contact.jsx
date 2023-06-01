import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {RiWhatsappLine} from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_07a27he', 'template_w54mojj', form.current, 'RLyZy2dIptPncusza')
    
      e.target.reset();
    
    };

  return (
    <>
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
       
       <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>astha24barnwal@gmail.com</h5>
            <a href="mailto:astha24barnwal@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Catch me here!</h5>
            <a href="https://www.linkedin.com/in/kumari-astha-rani-552662212/">Send a Message</a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+91 83406 21602 </h5>
            <a href="https://api.whatsapp.com/send?phone+8340621602">Send a Message</a>
          </article>


        </div>

        {/*END OF CONTACT OPTIONS */ }
        <form ref = {form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
         <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        
        </form>
       </div>
    </section>
    </>
  )
}

export default Contact;