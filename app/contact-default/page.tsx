'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact-default.module.css';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  // Dados do EmailJS diretamente no código
  const SERVICE_ID = 'service_bnortwq';
  const TEMPLATE_ID = 'template_b2nesyr';
  const PUBLIC_KEY = 'ZFVBMLkJL86IOMpNQ';

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setFeedback(null);

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('E-mail enviado:', result.status, result.text);
      setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      formRef.current.reset();
    } catch (error: unknown) {
      console.error('Erro ao enviar e-mail:', error);
      const message =
        error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      setFeedback({ type: 'error', message });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <p className={styles.contactSubtitle}>
          Have any questions or suggestions? Send us a message and we will get back to you as soon as possible!
        </p>

        <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Your Name</label>
            <input name="user_name" type="text" id="name" className={styles.formInput} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Your Email</label>
            <input name="user_email" type="email" id="email" className={styles.formInput} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Your Message</label>
            <textarea name="message" id="message" className={styles.formTextarea} required />
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {feedback && (
          <div
            className={
              feedback.type === 'success' ? styles.successMessage : styles.errorMessage
            }
          >
            {feedback.message}
          </div>
        )}
      </div>
    </section>
  );
}
