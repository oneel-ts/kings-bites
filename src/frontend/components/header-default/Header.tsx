"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./header-default.module.css";
import { FaCrown } from 'react-icons/fa';

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const isActive = (path: string) => {
        return pathname === path ? { 'aria-current': 'page' as const } : {};
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <FaCrown style={{ marginRight: '8px', color: '#FF6B00' }} /> King Bites
                </Link>
                <ul className={styles.navLinks}>
                    <li className={styles.navItem}>
                        <Link href="/" {...isActive('/')}>
                            Início
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/menu" {...isActive('/menu')}>
                            Cardápio
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about" {...isActive('/about')}>
                            Sobre
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact-default" {...isActive('/contact-default')}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}