import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wrzj048', 'template_ekfypts', form.current, 'eDTMjQhBJJgNmugsq')
    
    e.target.reset()
  };

  return (
    <>

    <section id='contact'>
      <h5>Get In Touch!</h5>
      <h2>Contact Me Here</h2>

      <div className="container contactContainer">
        <div className="contactOptions">

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message Here' required></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>

    <div className="linebreaks">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

    </>
  )
}

export default Contact