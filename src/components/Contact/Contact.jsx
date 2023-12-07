// Contact.jsx
import React from 'react';
import styles from './contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h1>Let's Connect</h1>
      <p>"Transform your vision into reality - Let's build together."</p>

      <form action="https://formspree.io/f/mgebdlbl" method="POST">
        <div className={styles.formGroup}>
          <input type="text" name="firstName" placeholder="First Name" required />
        </div>
        <div className={styles.formGroup}>
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>
        <div className={styles.formGroup}>
          <input type="email" name="_replyto" placeholder="Your Email" required />
        </div>
        <div className={styles.formGroup}>
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Contact</button>
      </form>
    </section>
  );
}

export default Contact;
