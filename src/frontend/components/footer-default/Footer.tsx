import styles from "./footer-default.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2025 King Bites. All rights reserved.
      </p>
    </footer>
  )
}