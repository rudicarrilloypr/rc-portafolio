import React, { useState, useRef, useEffect } from 'react';
import styles from './contact.module.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem('contactFormData');
    if (!stored || !formRef.current) return;

    try {
      const formData = JSON.parse(stored);
      if (!formData) return;

      formRef.current.firstName.value = formData.firstName || '';
      formRef.current.lastName.value = formData.lastName || '';
      formRef.current._replyto.value = formData._replyto || '';
      formRef.current.message.value = formData.message || '';
    } catch (e) {
      // si algo falla, simplemente ignoramos el localStorage corrupto
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const stored = localStorage.getItem('contactFormData');
    const formData = stored ? JSON.parse(stored) : {};
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
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        form.reset();
        localStorage.removeItem('contactFormData');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setStatus('Error sending message');
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setStatus('');
        if (contactRef.current) {
          contactRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 5000);
    }
  };

  return (
    <section id="contact" ref={contactRef} className={`section ${styles.contact}`}>
      <div className="section-inner">
        <div className={styles.header}>
          <h2 className="section-title">Let&apos;s connect</h2>
          <p className={styles.subtitle}>
            Transform your vision into something real. Tell me what you&apos;re
            building and how I can help.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.meta}>
            <p className={styles.metaText}>
              Whether you&apos;re looking for a front-end focused developer,
              a full-stack contributor, or feedback on a product idea, feel
              free to reach out. I usually reply within a day.
            </p>
            <div className={styles.metaDetail}>
              <span className={styles.metaLabel}>Based in</span>
              <span className={styles.metaValue}>Mexico · UTC−6</span>
            </div>
            <div className={styles.metaDetail}>
              <span className={styles.metaLabel}>Preferred work</span>
              <span className={styles.metaValue}>
                Remote · Product teams · Long-term collaboration
              </span>
            </div>
          </div>

          <form
            ref={formRef}
            action="https://formspree.io/f/mgebdlbl"
            method="POST"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Rudi"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Carrillo"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="_replyto">Email</label>
              <input
                id="_replyto"
                type="email"
                name="_replyto"
                placeholder="you@example.com"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share a bit about your project, timelines and expectations."
                required
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Sending…' : 'Send message'}
            </button>

            {status && (
              <div
                className={`${styles.message} ${
                  status.startsWith('Error') ? styles.error : styles.success
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
