import styles from './menuItem-default.module.css';
import Image, {StaticImageData} from "next/image";

interface MenuItemProps {
    name: string;
    description: string;
    ProductImage: StaticImageData;
    price: string;
    isSpecial?: boolean;
}

export default function MenuItem({name, description, ProductImage, price, isSpecial = false}: MenuItemProps) {
    const menuItemClasses = [
        styles.menuItem,
        isSpecial ? styles.special : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={menuItemClasses}>
            <div className={styles.textContainer}>
                <h2 className={styles.itemName}>{name}</h2>
                <p className={styles.itemDescription}>{description}</p>
            </div>
            <div className={styles.containerFood}>
                <Image style={{borderRadius: "16px"}} width={110} height={100} src={ProductImage} alt={""}/>
                <span className={styles.itemPrice}>{price}</span>
            </div>
        </div>
    );
}