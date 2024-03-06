import React, { useState } from 'react';
import './chats.css'

const ContactForm = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');


  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="container">
      <div className='background-image'></div> <div class="card"></div>
        <div className={`contact-container${darkMode ? ' dark-mode' : ''}`}>
          <div className="left-col"></div>
          <div className="right-col">
          <div className="theme-switch-wrapper text-center"> <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={handleToggleDarkMode} />
          <div className="slider round"></div>
        </label>
        <div className="description">Dark Mode</div>
        </div>

          <h1 className="text-center continuous-animation">Contact us</h1> 
          <h1 className="text-subcenter continuous-animation">Get in touch with us!</h1> 
            <form method="post" action="https://script.google.com/macros/s/AKfycbx_n7v-omFKeNzOvPxWpiqeWlCueDTX4rfPYnNMdJzi84dVo2vwWbwqTAvaLUzifA8O/exec" className="contact-form"> 
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" name="name" placeholder="Your Full Name" required />

              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Your Email Address" required />

              <label htmlForfor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" title="Please enter a 10-digit phone number" />

              <label htmlFor="message">Message</label>
              <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>

              <button type="submit" id="submit" name="submit">Send</button> 
            </form>
          <div id="error" className="error-message">
            {submitMessage && <p>{submitMessage}</p>}
        </div>
      </div>
    </div>
  </div>
  );
};


export default ContactForm;
