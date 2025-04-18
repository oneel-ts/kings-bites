import styles from './about-default.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>Sobre Nós</h2>
        
        <p className={styles.aboutText}>
          Fundado em 2020, o King Bites nasceu do sonho de levar hambúrgueres artesanais
          com ingredientes frescos e temperos especiais.
        </p>
        
        <div className={styles.aboutHighlights}>
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>🍔</div>
            <h3>Ingredientes Frescos</h3>
            <p>Todos os dias do produtor direto para sua mesa</p>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>👨‍🍳</div>
            <h3>Chefes Especializados</h3>
            <p>Preparo artesanal com técnicas exclusivas</p>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>❤️</div>
            <h3>Feito com Amor</h3>
            <p>Cada hambúrguer é preparado com carinho</p>
          </div>
        </div>
      </div>
    </section>
  );
}