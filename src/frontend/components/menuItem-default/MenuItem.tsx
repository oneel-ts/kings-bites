import styles from './menuItem-default.module.css';
import Image, { StaticImageData } from "next/image";

interface MenuItemProps {
    name: string;
    description: string;
    ProductImage: StaticImageData;
    price: string;
    isSpecial?: boolean;
    onClick?: () => void;
}

export function MenuItem({name, description, ProductImage, price, isSpecial = false, onClick}: MenuItemProps) {
    const menuItemClasses = [
        styles.menuItem,
        isSpecial ? styles.special : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={menuItemClasses} onClick={onClick}>
            <div className={styles.imageContainer}>
                <Image 
                    className={styles.img} 
                    src={ProductImage} 
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    style={{objectFit: 'cover'}}
                />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.itemName}>{name}</h2>
                <p className={styles.itemDescription}>{description}</p>
                <span className={styles.itemPrice}>{price}</span>
            </div>
        </div>
    );
}