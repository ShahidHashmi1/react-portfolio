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
    <section id='contact'>
      <h5>Get In Touch!</h5>
      <h2>Contact Me Here</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          
          {/* <article className="contactOption">
            <MdOutlineEmail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>Email</h5>
            <a href='mailto:hashmi.pgh@gmail.com'>Send Email</a>
          </article> */}

        {/* will add other options besides just email with articles */}

        </div>
        {/* end of options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message Here' required></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact