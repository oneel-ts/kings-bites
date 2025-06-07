import { ReactNode, useEffect } from 'react';
import styles from './modal.module.css';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    children?: ReactNode;
    link: string;
}

export function Modal({ isOpen, onClose, title, description, children, link }: ModalProps) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    <FaTimes />
                </button>
                <h3 className={styles.modalTitle}>{title}</h3>
                <p className={styles.modalDescription}>{description}</p>
                <div className={styles.modalActions}>
                    <a
                        href={link}
                        className={styles.orderButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaShoppingCart className={styles.buttonIcon} /> Fazer Pedido
                    </a>
                </div>
                {children}
            </div>
        </div>
    );
}