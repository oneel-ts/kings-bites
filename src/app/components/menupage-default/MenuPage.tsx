import MenuItem from "../menuItem-default/MenuItem";
import styles from "./menupage-default.module.css"

export default function MenuPage() {
  return (
    <div className={styles.menuContainer}>
      <header className={styles.header}>
        <h1 className={styles.restaurantName}>Saboroso</h1>
        <h2 className={styles.menuTitle}>Nosso Cardápio</h2>
      </header>

      <div className={styles.menuItems}>
        <MenuItem 
          name="Lastuba" 
          description="Com mídio cuisine e queijo grafando" 
          price="R$ 23,00" 
        />
        <MenuItem 
          name="Feijoada" 
          description="Aumentaria ante, clown e frente" 
          price="R$ 25,00" 
        />
        <MenuItem 
          name="Hambúrguer artesanal" 
          description="Com fruta e mídia especial" 
          price="R$ 22,00" 
        />
      </div>

      <footer className={styles.footer}>
        © 2025 Restaurante Saboroso. Todos os direitos reservados.
      </footer>
    </div>
  );
}