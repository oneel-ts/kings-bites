"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from "./header-default.module.css";
import { FaCrown, FaBars, FaTimes } from 'react-icons/fa';
import { Language, useLanguage } from "@/context";
import brazilFlag from "../../../../public/assets/bra-flag.jpg";
import usaFlag from "../../../../public/assets/usa-flag.jpeg";

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, setLanguage, translations } = useLanguage();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) && mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [scrolled, mobileMenuOpen]);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (path: string) => {
        return pathname === path ? { 'aria-current': 'page' as const } : {};
    };

    const toggleLanguage = () => {
        const newLanguage: Language = language === 'pt-BR' ? 'en-US' : 'pt-BR';
        setLanguage(newLanguage);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    <FaCrown style={{ marginRight: '8px', color: '#FF6B00' }} /> King Bites
                </Link>
                
                <button
                    className={styles.mobileMenuButton} 
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? (
                        <FaTimes className={styles.menuIcon} />
                    ) : (
                        <FaBars className={styles.menuIcon} />
                    )}
                </button>
                
                <div
                    ref={menuRef}
                    className={`${styles.menuContainer} ${mobileMenuOpen ? styles.menuOpen : ''}`}
                >
                    <ul className={styles.navLinks}>
                        <li className={styles.navItem}>
                            <Link href="/" {...isActive('/')}>
                                {translations['inicio']}
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/menu" {...isActive('/menu')}>
                                {translations['cardapio']}
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/about" {...isActive('/about')}>
                                {translations['sobre']}
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/contact-default" {...isActive('/contact-default')}>
                                {translations['contato']}
                            </Link>
                        </li>
                        <li className={`${styles.navItem} ${styles.langToggle}`}>
                            <button 
                                onClick={toggleLanguage}
                                className={styles.langButton}
                                aria-label={language === 'pt-BR' ? 'Alterar para inglês' : 'Change to Portuguese'}
                            >
                                <div className={styles.flagContainer}>
                                    <div className={`${styles.flagImage} ${styles.currentFlag}`}>
                                        <Image 
                                            src={language === 'pt-BR' ? brazilFlag : usaFlag} 
                                            alt={language === 'pt-BR' ? 'Bandeira do Brasil' : 'USA Flag'}
                                            fill
                                            sizes="40px"
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                    <div className={`${styles.flagImage} ${styles.alternateFlag}`}>
                                        <Image 
                                            src={language === 'pt-BR' ? usaFlag : brazilFlag} 
                                            alt={language === 'pt-BR' ? 'USA Flag' : 'Bandeira do Brasil'}
                                            fill
                                            sizes="40px"
                                            style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}