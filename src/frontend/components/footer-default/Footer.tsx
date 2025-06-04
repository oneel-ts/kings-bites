"use client"

import styles from "./footer-default.module.css";
import { FaCrown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className={`${styles.footer} ${isVisible ? 'fade-in' : ''}`}>
            <p className={styles.copyright}>
                <FaCrown style={{ marginRight: '8px', color: '#FF6B00', verticalAlign: 'middle' }} />
                &copy; 2025 King Bites. All rights reserved.
            </p>
        </footer>
    )
}