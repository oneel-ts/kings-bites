import Image from "next/image";
import styles from "./menuItem-default.module.css";
import { StaticImageData } from 'next/image';

interface MenuItemProps {
    name: string;
    price: string;
    description: string;
    ProductImage: StaticImageData;
    link: string;
    category: string;
    onClick: () => void;
}

export function MenuItem({
                             name,
                             price,
                             description,
                             ProductImage,
                             onClick
                         }: MenuItemProps) {
    return (
        <div className={styles.menuItem} onClick={onClick}>
            <div className={styles.imageContainer}>
                <Image
                    src={ProductImage}
                    alt={name}
                    className={styles.img}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={styles.textContainer}>
                <h3 className={styles.itemName}>{name}</h3>
                <p className={styles.itemDescription}>{description}</p>
                <span className={styles.itemPrice}>{price}</span>
            </div>
        </div>
    );
}