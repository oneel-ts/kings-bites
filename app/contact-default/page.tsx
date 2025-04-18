import styles from './contact-default.module.css';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Fale Conosco</h2>
        <p className={styles.contactSubtitle}>
          Tem alguma dúvida ou sugestão? Envie uma mensagem que retornaremos o mais breve possível!
        </p>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Seu Nome</label>
            <input type="text" id="name" className={styles.formInput} required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Seu Email</label>
            <input type="email" id="email" className={styles.formInput} required />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Sua Mensagem</label>
            <textarea id="message" className={styles.formTextarea} required></textarea>
          </div>
          
          <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
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