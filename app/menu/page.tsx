'use client';

import { useState } from 'react';
import styles from './menu-default.module.css';
import {MenuItem} from "@/frontend/components/menuItem-default/MenuItem";
import noodle from "../../public/assets/nodlee.jpg";
import snacks from "../../public/assets/snacks.jpg";
import burguer from "../../public/assets/burguer-combo.jpg";
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
    name: "Special Combo One", 
    price: "$61,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: fritas,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-Egg", 
    price: "$14,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: egg,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-Bacon", 
    price: "$14,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: bacon,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "X-Tudo BURGER", 
    price: "$17,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: tudo,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Bacon Cheddar Fries", 
    price: "$13,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: chedar,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Little Sausage Roll", 
    price: "$5,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: enroladinho,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Cheesy Corn Fritters", 
    price: "$4,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: queijo,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Coxinha", 
    price: "$4,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: coxinha,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Coke Can", 
    price: "$2,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: coke,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Guarana Can", 
    price: "$2,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: guarana,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Bottle of Coca-Cola", 
    price: "$5,50", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: gcoke,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Bottle of Guarana", 
    price: "$5,50", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: gguarana,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Bottle of water", 
    price: "$1,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
    ProductImage: agua,
    link: "https://www.doordash.com/store/24952473?utm_source=mx_share"
  },
  {
    name: "Chicken wings and fries", 
    price: "$15,99", 
    description: "Fried parsnips, french fries, sautéed Calabrian sausage, chicken wings, fried bananas, fresh tomatoes, crispy bacon, and melted cheddar cheese.", 
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
