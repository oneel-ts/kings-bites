import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <h1 className={styles.homeTitle}>King Bites</h1>
      <p className={styles.homeSubtitle}>Sabores incríveis, feitos com carinho e ingredientes frescos</p>
      
      <img
        src="/images/banner.jpg"
        alt="Hambúrguer artesanal King Bites"
        className={styles.homeBanner}
      />
      
      <Link href="/menu" className={styles.homeCta}>
        Ver Cardápio Completo
      </Link>
    </section>
  );
}