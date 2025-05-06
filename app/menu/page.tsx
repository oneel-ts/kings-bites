'use client';

import { useState } from 'react';
import styles from './menu-default.module.css';
import {MenuItem} from "@/frontend/components/menuItem-default/MenuItem";
import noodle from "../../public/assets/nodlee.jpg";
import snacks from "../../public/assets/snacks.jpg";
import chicken from "../../public/assets/chicken.jpeg";
import fritas from "../../public/assets/fritasC.jpeg";
import combo2 from "../../public/assets/Combo2.jpeg";
import egg from "../../public/assets/egg.jpeg";
import bacon from "../../public/assets/bacon.jpeg";
import tudo from "../../public/assets/tudo.jpeg";
import chedar from "../../public/assets/chedar.jpeg";
import enroladinho from "../../public/assets/enroladinho.jpeg";
import queijo from "../../public/assets/queijo.jpeg";
import coxinha from "../../public/assets/coxinha.jpeg";
import coke from "../../public/assets/coke.jpeg";
import guarana from "../../public/assets/guarana.jpeg";
import gcoke from "../../public/assets/garrafaC.jpeg";
import gguarana from "../../public/assets/garrafaG.jpeg";
import agua from "../../public/assets/Agua.jpeg";
import frango from "../../public/assets/frango.jpeg";
import { Modal } from '@/frontend/modal-default/Modal'; // você vai criar esse componente de Modal que falamos

const items = [
  { 
    name: "Griddle Noodles", 
    price: "$17,99", 
    description: "Com molho caseiro e queijo gratinado.", 
    ProductImage: noodle,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share" //adiciona o link aqui
  },
  { 
    name: "Snacks", 
    price: "$28,00", 
    description: "Acompanha arroz, couve e farofa.", 
    ProductImage: snacks,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  { 
    name: "Special Combo Two", 
    price: "$71,99", 
    description: "3 X-Everything Burgers ,  Grilled Calabrian Sausage (Spicy Brazilian-style) , 25 Mini Brazilian Savory Pastries (Coxinha, risoles, and more), Loaded Fries", 
    ProductImage: combo2,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-chicken", 
    price: "$13,99", 
    description: "Grilled fresh chicken, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.", 
    ProductImage: chicken,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  }, 
  {
    name: "X-KingBites Chicken", 
    price: "$13,99", 
    description: "Hamburger, egg, Bacon, ham, mozzarella cheese, lettuce, tomato, corn, potato sticks and chicken.", 
    ProductImage: chicken,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Special Combo One", 
    price: "$61,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: fritas,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-Egg", 
    price: "$14,99", 
    description: "Egg, Bacon, Ham, Mozzarella Cheese, Lettuce, Tomato, corn, Potato sticks, and Mayonnaise.", 
    ProductImage: egg,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-Bacon", 
    price: "$14,99", 
    description: "Egg, Bacon, Ham, Mozzarella Cheese, Lettuce, Tomato, corn, Potato sticks, and Mayonnaise.", 
    ProductImage: bacon,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-Tudo BURGER", 
    price: "$17,99", 
    description: "Hamburger, Egg, Bacon, Ham, Mozzarella Cheese, Lettuce, Tomato, corn, Potato sticks, and Mayonnaise. Perfectly come together for the flavors of a Brazilian Burger", 
    ProductImage: tudo,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Fries bacon cheddar", 
    price: "$13,99", 
    description: "Crispy fries topped with melted cheddar cheese and crumbled bacon.", 
    ProductImage: chedar,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Little Sausage Roll", 
    price: "$5,99", 
    description: "Brazilian-style sausage rolls available in assorted quantities: 15, 25, 50, or 100", 
    ProductImage: enroladinho,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Cheesy Corn Fritters", 
    price: "$4,99", 
    description: "Brazilian cheese balls infused with corn. Available in quantities of 15, 25, 50, or 100", 
    ProductImage: queijo,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Coxinha", 
    price: "$4,99", 
    description: "Brazilian-style chicken dumplings, options for various quantities: 15, 25, 50, or 100", 
    ProductImage: coxinha,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Coke Can", 
    price: "$2,99", 
    description: "Carbonated soft drink with a sweet, cola flavor.", 
    ProductImage: coke,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Guarana Can", 
    price: "$2,99", 
    description: "A refreshing Brazilian soda made from guarana berries, offering a unique and slightly sweet flavor.", 
    ProductImage: guarana,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Coke bottle", 
    price: "$5,50", 
    description: "Refreshing carbonated beverage with a bold cola taste. 2L", 
    ProductImage: gcoke,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Guarana Bottle", 
    price: "$5,50", 
    description: "Sparkling beverage made from Brazilian guaraná berries. 2L", 
    ProductImage: gguarana,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Water Bottle", 
    price: "$1,99", 
    description: "Pure, refreshing hydration in a bottle.", 
    ProductImage: agua,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Chicken wings and fries", 
    price: "$15,99", 
    description: "6 Crispy chicken wings paired with golden fries.", 
    ProductImage: frango,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  }
];

export default function MenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  const openModal = (item: typeof items[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className={styles.menuSection}>
      <h2 className={styles.menuTitle}>Our Menu</h2>
      <div className={styles.menuGrid}>
        {items.map((item, i) => (
          <MenuItem key={i} {...item} onClick={() => openModal(item)} />
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedItem.name}
          description={selectedItem.description}
          link={selectedItem.link}
        />
      )}
    </section>
  );
}
