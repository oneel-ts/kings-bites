'use client';

import { ReactNode } from "react";
import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  link: string;
}

export function Modal({ isOpen, onClose, title, description, link }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttons}>
          <button className={styles.closeButton} onClick={onClose}>Close</button>
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>Ir para o site</a>
        </div>
      </div>
    </div>
  );
}
