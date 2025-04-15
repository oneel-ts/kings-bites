import styles from './menuItem-default.module.css';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  isSpecial?: boolean;
}

export default function MenuItem({ name, description, price, isSpecial = false }: MenuItemProps) {
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
      <span className={styles.itemPrice}>{price}</span>
    </div>
  );
}