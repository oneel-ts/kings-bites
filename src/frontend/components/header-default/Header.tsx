import Link from 'next/link'
import styles from "./header-default.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <h1 className={styles.logo}>👑 King Bites</h1>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}><Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/menu">Menu</Link></li>
          <li className={styles.navItem}><Link href="/about">Upon</Link></li>
          <li className={styles.navItem}><Link href="/contact-default">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}