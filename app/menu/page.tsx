import styles from './menu-default.module.css';
import MenuItem from "@/frontend/components/menuItem-default/MenuItem";
import noodle from "../../public/assets/nodlee.jpg"
import snacks from "../../public/assets/snacks.jpg"
import burguer from "../../public/assets/burguer-combo.jpg"

const items = [
  { name: "Noodle", price: "$ 32,00", description: "Com molho caseiro e queijo gratinado.", ProductImage:  noodle},
  { name: "Snacks", price: "$ 28,00", description: "Acompanha arroz, couve e farofa.", ProductImage:  snacks},
  { name: "Burguer combo", price: "$ 22,00", description: "Com fritas e molho especial.", ProductImage:  burguer},
  
];

export default function MenuPage() {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuTitle}>Our Menu</h2>
      <div className={styles.menuGrid}>
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}