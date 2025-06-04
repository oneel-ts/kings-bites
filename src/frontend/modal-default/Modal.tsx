'use client';

import { useEffect, useRef } from 'react';
import styles from './modal.module.css';
import { FaShoppingCart, FaTimes, FaArrowRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    link: string;
    price?: string;
    ProductImage?: never;
}

export function Modal({ isOpen, onClose, title, description, link, price, ProductImage }: ModalProps) {
    const scrollPosition = useRef(0);

    useEffect(() => {
        if (isOpen) {
            scrollPosition.current = window.pageYOffset;
            
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${scrollbarWidth}px`;
            
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);

    const handleConfirmOrder = () => {
        window.open(link, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    <FaTimes />
                </button>

                <div className={styles.modalHeader}>
                    <div className={styles.modalHeaderContent}>
                        <h2 className={styles.modalTitle}>{title}</h2>
                        {price && <div className={styles.modalPrice}>{price}</div>}
                    </div>
                </div>

                {ProductImage && (
                    <div className={styles.modalImageContainer}>
                        <Image
                            src={ProductImage}
                            alt={title}
                            className={styles.modalImage}
                            width={300}
                            height={200}
                        />
                    </div>
                )}

                <div className={styles.modalBody}>
                    <p className={styles.modalDescription}>{description}</p>

                    <div className={styles.modalFeatures}>
                        <div className={styles.modalFeature}>
                            <FaCheck className={styles.featureIcon} />
                            <span>Ingredientes frescos</span>
                        </div>
                        <div className={styles.modalFeature}>
                            <FaCheck className={styles.featureIcon} />
                            <span>Sabor autêntico brasileiro</span>
                        </div>
                        <div className={styles.modalFeature}>
                            <FaCheck className={styles.featureIcon} />
                            <span>Preparado na hora</span>
                        </div>
                    </div>
                </div>

                <div className={styles.modalFooter}>
                    <button className={`${styles.modalButton} ${styles.secondaryButton}`} onClick={onClose}>
                        Cancelar
                    </button>
                    <button
                        className={`${styles.modalButton} ${styles.primaryButton}`}
                        onClick={handleConfirmOrder}
                    >
                        <FaShoppingCart className={styles.buttonIcon} />
                        Fazer Pedido <FaArrowRight className={styles.buttonIcon} />
                    </button>
                </div>
            </div>
        </div>
    );
}