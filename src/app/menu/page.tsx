import MenuItem from "../components/menuItem-default/MenuItem";
import styles from './menu-default.module.css'; // Crie este arquivo CSS Module

const items = [
  { name: "Lasanha", price: "R$ 32,00", description: "Com molho caseiro e queijo gratinado." },
  { name: "Feijoada", price: "R$ 28,00", description: "Acompanha arroz, couve e farofa." },
  { name: "Hambúrguer artesanal", price: "R$ 22,00", description: "Com fritas e molho especial." },
];

export default function Menu() {
  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuTitle}>Nosso Cardápio</h2>
      <div className={styles.menuGrid}>
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}