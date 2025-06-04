'use client';

import {useState, useRef} from 'react';
import styles from './menu-default.module.css';
import {MenuItem} from "@/frontend/components/menuItem-default/MenuItem";
import Image from "next/image";
import {FaHamburger, FaUtensils, FaPizzaSlice, FaGlassWhiskey, FaShoppingCart} from 'react-icons/fa';
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
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay, EffectCoverflow} from 'swiper/modules';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {Modal} from '@/frontend/modal-default/Modal';

const burgers = [
    {
        name: "X-chicken",
        price: "$13,99",
        description: "Grilled fresh chicken, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.",
        ProductImage: chicken,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "burgers"
    },
    {
        name: "X-KingBites Chicken",
        price: "$13,99",
        description: "Hamburger, egg, bacon, ham, mozzarella, lettuce, tomato, corn, potato sticks and chicken.",
        ProductImage: chicken,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "burgers"
    },
    {
        name: "X-Egg",
        price: "$14,99",
        description: "Egg, bacon, ham, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.",
        ProductImage: egg,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "burgers"
    },
    {
        name: "X-Bacon",
        price: "$14,99",
        description: "Egg, bacon, ham, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.",
        ProductImage: bacon,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "burgers"
    },
    {
        name: "X-Tudo BURGER",
        price: "$17,99",
        description: "Hamburger, egg, bacon, mozzarella, lettuce, tomato, corn, potato, and mayonnaise.",
        ProductImage: tudo,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "burgers"
    },
];

const combos = [
    {
        name: "Special Combo Two",
        price: "$71,99",
        description: "3 X-Everything Burgers, Grilled Calabrian, 25 Mini Brazilian Savory Pastries, and Loaded Fries.",
        ProductImage: combo2,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "combos"
    },
    {
        name: "Special Combo One",
        price: "$61,99",
        description: "Fried parsnips, french fries, chicken wings, tomatoes, crispy bacon, and melted cheddar cheese.",
        ProductImage: fritas,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "combos"
    },
    {
        name: "Fries bacon cheddar",
        price: "$13,99",
        description: "Crispy fries topped with melted cheddar cheese and crumbled bacon.",
        ProductImage: chedar,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "combos"
    },
    {
        name: "Chicken wings and fries",
        price: "$15,99",
        description: "6 Crispy chicken wings paired with golden fries.",
        ProductImage: frango,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "combos"
    }
];

const salgadinhos = [
    {
        name: "Little Sausage Roll",
        price: "$5,99",
        description: "Brazilian-style sausage rolls. Available in quantities: 15, 25, 50, or 100.",
        ProductImage: enroladinho,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "salgadinhos"
    },
    {
        name: "Cheesy Corn Fritters",
        price: "$4,99",
        description: "Brazilian cheese balls infused with corn. Available in quantities: 15, 25, 50, or 100.",
        ProductImage: queijo,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "salgadinhos"
    },
    {
        name: "Coxinha",
        price: "$4,99",
        description: "Brazilian-style chicken dumplings. Available in quantities: 15, 25, 50, or 100.",
        ProductImage: coxinha,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "salgadinhos"
    }
];

const bebidas = [
    {
        name: "Coke Can",
        price: "$2,99",
        description: "Carbonated soft drink with a sweet, cola flavor.",
        ProductImage: coke,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "bebidas"
    },
    {
        name: "Guarana Can",
        price: "$2,99",
        description: "A refreshing Brazilian soda made from guarana berries, offering a unique and slightly sweet flavor.",
        ProductImage: guarana,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "bebidas"
    },
    {
        name: "Coke bottle",
        price: "$5,50",
        description: "Refreshing carbonated beverage with a bold cola taste. 2L.",
        ProductImage: gcoke,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "bebidas"
    },
    {
        name: "Guarana Bottle",
        price: "$5,50",
        description: "Sparkling beverage made from Brazilian guaraná berries. 2L.",
        ProductImage: gguarana,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "bebidas"
    },
    {
        name: "Water Bottle",
        price: "$1,99",
        description: "Pure, refreshing hydration in a bottle.",
        ProductImage: agua,
        link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
        category: "bebidas"
    }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allItems = [...burgers, ...combos, ...salgadinhos, ...bebidas];

export default function MenuPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<typeof allItems[0] | null>(null);
    const [activeCategory, setActiveCategory] = useState("todos");

    const burgersSectionRef = useRef<HTMLDivElement>(null);
    const combosSectionRef = useRef<HTMLDivElement>(null);
    const salgadinhosSectionRef = useRef<HTMLDivElement>(null);
    const bebidasSectionRef = useRef<HTMLDivElement>(null);

    const openModal = (item: typeof allItems[0]) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const scrollToCategory = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className={styles.menuSection}>
            <div className={styles.menuHero}>
                <h1 className={styles.menuTitle}>CARDÁPIO KING BITES</h1>
                <p className={styles.menuSubtitle}>
                    Experimente nossos lanches artesanais com autêntico sabor brasileiro
                </p>
            </div>

            <div className={styles.specialOffer}>
                <span className={styles.specialOfferLabel}>ESPECIAL</span>
                <div className={styles.specialOfferContent}>
                    <div className={styles.specialOfferImage}>
                        <Image
                            src={combo2}
                            alt="Combo Especial King Bites"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.specialOfferInfo}>
                        <h3 className={styles.specialOfferTitle}>COMBO ESPECIAL KING BITES</h3>
                        <p className={styles.specialOfferDescription}>
                            Experimente nosso combo exclusivo com 3 X-Tudo Burgers, linguiça calabresa grelhada
                            (estilo brasileiro picante),
                            25 mini salgadinhos brasileiros (coxinha, risoles e mais) e batatas fritas carregadas.
                            Perfeito para compartilhar com amigos e família!
                        </p>
                        <div className={styles.specialOfferPrice}>$71,99</div>
                        <a href="https://www.doordash.com/store/24952473?utm_source=mx_share"
                           className={`${styles.orderButton} ${styles.orderButtonPrimary}`}
                           target="_blank" rel="noopener noreferrer">
                            <FaShoppingCart className={styles.orderButtonIcon}/> FAZER PEDIDO
                        </a>
                    </div>
                </div>
            </div>

            <nav className={styles.categoriesNav}>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'todos' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('todos')}
                >
                    Todos
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'burgers' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('burgers')}
                >
                    Hambúrgueres
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'combos' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('combos')}
                >
                    Combos
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'salgadinhos' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('salgadinhos')}
                >
                    Salgadinhos
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'bebidas' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('bebidas')}
                >
                    Bebidas
                </button>
            </nav>

            <div className={styles.menuContent}>
                <div
                    ref={burgersSectionRef}
                    className={`${styles.categorySection} ${activeCategory !== 'todos' && activeCategory !== 'burgers' ? styles.hidden : ''}`}
                >
                    <div className={styles.categoryHeader}>
                        <FaHamburger className={styles.categoryIcon}/>
                        <h2 className={styles.categoryTitle}>HAMBÚRGUERES BRASILEIROS</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        Nossos hambúrgueres artesanais são preparados no estilo autêntico brasileiro, com ingredientes
                        frescos e de alta qualidade.
                        Cada hambúrguer vem com uma combinação única de sabores que te transportarão diretamente para as
                        ruas do Brasil.
                    </p>
                    <div className={styles.menuGrid}>
                        {burgers.map((item, i) => (
                            <MenuItem key={i} {...item} onClick={() => openModal(item)}/>
                        ))}
                    </div>
                </div>

                <div
                    ref={combosSectionRef}
                    className={`${styles.categorySection} ${activeCategory !== 'todos' && activeCategory !== 'combos' ? styles.hidden : ''}`}
                >
                    <div className={styles.categoryHeader}>
                        <FaUtensils className={styles.categoryIcon}/>
                        <h2 className={styles.categoryTitle}>COMBOS E ACOMPANHAMENTOS</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        Nossos combos são perfeitos para compartilhar ou para quem quer experimentar uma variedade de
                        sabores.
                        Com opções que combinam nossos lanches favoritos com acompanhamentos deliciosos, você terá uma
                        experiência gastronômica completa.
                    </p>
                    <div className={styles.menuGrid}>
                        {combos.map((item, i) => (
                            <MenuItem key={i} {...item} onClick={() => openModal(item)}/>
                        ))}
                    </div>
                </div>

                <div
                    ref={salgadinhosSectionRef}
                    className={`${styles.categorySection} ${activeCategory !== 'todos' && activeCategory !== 'salgadinhos' ? styles.hidden : ''}`}
                >
                    <div className={styles.categoryHeader}>
                        <FaPizzaSlice className={styles.categoryIcon}/>
                        <h2 className={styles.categoryTitle}>SALGADINHOS BRASILEIROS</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        Os salgadinhos são uma parte essencial da culinária brasileira. Oferecemos uma variedade de
                        opções tradicionais,
                        desde coxinhas até enroladinhos de salsicha, todos preparados com receitas autênticas trazidas
                        diretamente do Brasil.
                    </p>
                    <div className={styles.menuGrid}>
                        {salgadinhos.map((item, i) => (
                            <MenuItem key={i} {...item} onClick={() => openModal(item)}/>
                        ))}
                    </div>
                </div>

                <div
                    ref={bebidasSectionRef}
                    className={`${styles.categorySection} ${activeCategory !== 'todos' && activeCategory !== 'bebidas' ? styles.hidden : ''}`}
                >
                    <div className={styles.categoryHeader}>
                        <FaGlassWhiskey className={styles.categoryIcon}/>
                        <h2 className={styles.categoryTitle}>BEBIDAS</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        Complete sua refeição com nossa seleção de bebidas, incluindo os refrigerantes brasileiros como
                        o famoso Guaraná,
                        que oferece um sabor único e refrescante para acompanhar seus lanches favoritos.
                    </p>
                    <div className={styles.menuGrid}>
                        {bebidas.map((item, i) => (
                            <MenuItem key={i} {...item} onClick={() => openModal(item)}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.testimonialsSection}>
                <div className={styles.testimonialsInner}>
                    <h3 className={styles.testimonialsTitle}>O QUE NOSSOS CLIENTES DIZEM</h3>

                    <div className={styles.testimonialCarousel}>
                        <Swiper
                            modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: true,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: styles.swiperPaginationBullet,
                                bulletActiveClass: styles.swiperPaginationBulletActive
                            }}
                            navigation={{
                                nextEl: `.${styles.swiperButtonNext}`,
                                prevEl: `.${styles.swiperButtonPrev}`,
                            }}
                            autoplay={{delay: 5000, disableOnInteraction: false}}
                            className={styles.swiper}
                        >
                            <SwiperSlide>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.testimonialRating}>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className={styles.testimonialText}>
                                            Os hambúrgueres do King Bites são simplesmente incríveis! O X-Tudo me fez
                                            lembrar dos
                                            lanches que comia no Brasil. Sem dúvida, o melhor hambúrguer brasileiro que
                                            já comi nos EUA!
                                        </div>
                                        <div className={styles.testimonialAuthor}>
                                            <div className={styles.authorAvatar}>
                                                <span>M</span>
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.authorName}>Maria Oliveira</div>
                                                <div className={styles.authorLocation}>Miami, FL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.testimonialRating}>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className={styles.testimonialText}>
                                            As coxinhas são autênticas e deliciosas! Peço sempre um combo para levar
                                            para casa.
                                            Recomendo a todos que querem experimentar o verdadeiro sabor brasileiro.
                                        </div>
                                        <div className={styles.testimonialAuthor}>
                                            <div className={styles.authorAvatar}>
                                                <span>J</span>
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.authorName}>John Peterson</div>
                                                <div className={styles.authorLocation}>Orlando, FL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.testimonialRating}>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStarHalfAlt/>
                                        </div>
                                        <div className={styles.testimonialText}>
                                            O atendimento é excelente e a comida é ainda melhor! O Combo Especial King
                                            Bites vale cada centavo.
                                            Ótimo para reunir amigos e família para experimentar a culinária brasileira.
                                        </div>
                                        <div className={styles.testimonialAuthor}>
                                            <div className={styles.authorAvatar}>
                                                <span>R</span>
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.authorName}>Rafael Santos</div>
                                                <div className={styles.authorLocation}>Tampa, FL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.testimonialRating}>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className={styles.testimonialText}>
                                            Desde que descobri o King Bites, não consigo parar de voltar! Os
                                            enroladinhos de salsicha são perfeitos
                                            e me fazem lembrar dos lanches que comia nas festas no Brasil. Ambiente
                                            acolhedor e staff super simpático!
                                        </div>
                                        <div className={styles.testimonialAuthor}>
                                            <div className={styles.authorAvatar}>
                                                <span>A</span>
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.authorName}>Amanda Costa</div>
                                                <div className={styles.authorLocation}>Fort Lauderdale, FL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.testimonialContent}>
                                        <div className={styles.testimonialRating}>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                            <FaStar/>
                                        </div>
                                        <div className={styles.testimonialText}>
                                            Finalmente encontrei um lugar que serve Guaraná genuíno! A combinação do
                                            X-Bacon com uma lata de Guaraná
                                            é imbatível. Os salgadinhos também são muito bons, especialmente as
                                            coxinhas.
                                        </div>
                                        <div className={styles.testimonialAuthor}>
                                            <div className={styles.authorAvatar}>
                                                <span>D</span>
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <div className={styles.authorName}>David Miller</div>
                                                <div className={styles.authorLocation}>Jacksonville, FL</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <div className={styles.ctaInner}>
                    <h3 className={styles.ctaTitle}>EXPERIMENTE O SABOR AUTÊNTICO DO BRASIL</h3>
                    <p className={styles.ctaText}>Visite o King Bites hoje ou faça seu pedido online para experimentar
                        os melhores lanches brasileiros nos Estados Unidos!</p>
                    <a href="https://www.doordash.com/store/24952473?utm_source=mx_share"
                       className={`${styles.orderButton} ${styles.orderButtonSecondary}`}
                       target="_blank" rel="noopener noreferrer">
                        <FaShoppingCart className={styles.orderButtonIcon}/> PEDIR AGORA
                    </a>
                </div>
            </div>
            {selectedItem && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={selectedItem.name}
                    description={selectedItem.description}
                    link={selectedItem.link}
                />
            )}
        </div>
    );
}