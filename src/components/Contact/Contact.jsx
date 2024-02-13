import React, { useState, useRef, useEffect } from 'react';
import styles from './contact.module.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null); // Referencia al formulario

  useEffect(() => {
    // Cargar datos guardados del formulario al iniciar
    const formData = JSON.parse(localStorage.getItem('contactFormData'));
    if (formData && formRef.current) {
      formRef.current.firstName.value = formData.firstName || '';
      formRef.current.lastName.value = formData.lastName || '';
      formRef.current._replyto.value = formData._replyto || '';
      formRef.current.message.value = formData.message || '';
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formData = JSON.parse(localStorage.getItem('contactFormData')) || {};
    formData[name] = value;
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        setStatus('Message Sent Successfully');
        form.reset();
        localStorage.removeItem('contactFormData'); // Limpiar datos guardados del formulario
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setStatus('Error Sending Message');
    } finally {
      setIsLoading(false);

      // Establece un temporizador para limpiar el mensaje y desplazar la vista
      setTimeout(() => {
        setStatus('');
        // Desplaza hacia la sección de contacto
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 5000); // Ajusta el tiempo según sea necesario
    }
  };

  return (
    <section id="contact" ref={contactRef} className={styles.contact}>
      <h1>Let's Connect</h1>
      <p>"Transform your vision into reality - Let's build together."</p>

      <form ref={formRef} action="https://formspree.io/f/mgebdlbl" method="POST" onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input type="text" name="firstName" placeholder="First Name" required onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <input type="text" name="lastName" placeholder="Last Name" required onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <input type="email" name="_replyto" placeholder="Your Email" required onChange={handleInputChange} />
        </div>
        <div className={styles.formGroup}>
          <textarea name="message" placeholder="Your Message" required onChange={handleInputChange}></textarea>
        </div>
        <button type="submit" className={styles.submitButton} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Contact'}
        </button>
      </form>
      {status && <div className={`${styles.message} ${status.startsWith('Error') ? styles.error : styles.success}`}>{status}</div>}
    </section>
  );
}

export default Contact;
