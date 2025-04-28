import styles from './menuItem-default.module.css';
import Image, { StaticImageData } from "next/image";

interface MenuItemProps {
    name: string;
    description: string;
    ProductImage: StaticImageData;
    price: string;
    isSpecial?: boolean;
    onClick?: () => void; //  AQUI: adiciona o onClick
}

export function MenuItem({name, description, ProductImage, price, isSpecial = false, onClick}: MenuItemProps) {
    const menuItemClasses = [
        styles.menuItem,
        isSpecial ? styles.special : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={menuItemClasses} onClick={onClick}>
            <div className={styles.textContainer}>
                <h2 className={styles.itemName}>{name}</h2>
                <p className={styles.itemDescription}>{description}</p>
            </div>
            <div className={styles.containerFood}>
                <Image className={styles.img} width={110} height={100} src={ProductImage} alt={name}/>
                <span className={styles.itemPrice}>{price}</span>
            </div>
        </div>
    );
}
