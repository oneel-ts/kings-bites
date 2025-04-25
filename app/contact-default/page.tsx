import styles from './contact-default.module.css';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <p className={styles.contactSubtitle}>
        Have any questions or suggestions? Send us a message and we will get back to you as soon as possible!
        </p>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Your Name</label>
            <input type="text" id="name" className={styles.formInput} required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Your Email</label>
            <input type="email" id="email" className={styles.formInput} required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Your Message</label>
            <textarea id="message" className={styles.formTextarea} required></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📞</div>
            <p>(11) 98765-4321</p>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>✉️</div>
            <p>contato@kingbites.com</p>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📍</div>
            <p>Rua dos Hambúrgueres, 123</p>
          </div>
        </div>
      </div>
    </section>
  );
}