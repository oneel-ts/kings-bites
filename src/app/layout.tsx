import Footer from './components/footer-default/Footer'
import Header from './components/header-default/Header'
import styles from './layout-default.module.css' // Importe o CSS
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Restaurante Saboroso',
  description: 'O melhor da culinária direto pra sua mesa!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={styles.layoutContainer}>
        <Header />
        <main className={`${styles.mainContent} ${styles.pageContainer}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}