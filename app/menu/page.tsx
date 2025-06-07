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
import { useLanguage } from "@/context";

export default function MenuPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any | null>(null);
    const [activeCategory, setActiveCategory] = useState("todos");
    const { translations, language } = useLanguage();

    const burgersSectionRef = useRef<HTMLDivElement>(null);
    const combosSectionRef = useRef<HTMLDivElement>(null);
    const salgadinhosSectionRef = useRef<HTMLDivElement>(null);
    const bebidasSectionRef = useRef<HTMLDivElement>(null);

    // Menu items com tradução dinâmica
    const burgers = [
        {
            name: "X-chicken",
            price: "$13,99",
            description: language === 'pt-BR' ? 
                "Frango grelhado, queijo mussarela, alface, tomate, milho, batata palha e maionese." :
                "Grilled fresh chicken, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.",
            ProductImage: chicken,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "burgers"
        },
        {
            name: "X-KingBites Chicken",
            price: "$13,99",
            description: language === 'pt-BR' ? 
                "Hambúrguer, ovo, bacon, presunto, mussarela, alface, tomate, milho, batata palha e frango." :
                "Hamburger, egg, bacon, ham, mozzarella, lettuce, tomato, corn, potato sticks and chicken.",
            ProductImage: chicken,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "burgers"
        },
        {
            name: "X-Egg",
            price: "$14,99",
            description: language === 'pt-BR' ? 
                "Ovo, bacon, presunto, queijo mussarela, alface, tomate, milho, batata palha e maionese." :
                "Egg, bacon, ham, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.",
            ProductImage: egg,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "burgers"
        },
        {
            name: "X-Bacon",
            price: "$14,99",
            description: language === 'pt-BR' ? 
                "Ovo, bacon, presunto, queijo mussarela, alface, tomate, milho, batata palha e maionese." :
                "Egg, bacon, ham, mozzarella cheese, lettuce, tomato, corn, potato sticks, and mayonnaise.",
            ProductImage: bacon,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "burgers"
        },
        {
            name: "X-Tudo BURGER",
            price: "$17,99",
            description: language === 'pt-BR' ? 
                "Hambúrguer, ovo, bacon, mussarela, alface, tomate, milho, batata palha e maionese." :
                "Hamburger, egg, bacon, mozzarella, lettuce, tomato, corn, potato, and mayonnaise.",
            ProductImage: tudo,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "burgers"
        },
    ];

    const combos = [
        {
            name: language === 'pt-BR' ? "Combo Especial Dois" : "Special Combo Two",
            price: "$71,99",
            description: language === 'pt-BR' ? 
                "3 X-Tudo Burgers, linguiça calabresa grelhada, 25 mini salgadinhos brasileiros e batatas fritas carregadas." :
                "3 X-Everything Burgers, Grilled Calabrian, 25 Mini Brazilian Savory Pastries, and Loaded Fries.",
            ProductImage: combo2,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "combos"
        },
        {
            name: language === 'pt-BR' ? "Combo Especial Um" : "Special Combo One",
            price: "$61,99",
            description: language === 'pt-BR' ? 
                "Mandioca frita, batatas fritas, asas de frango, tomates, bacon crocante e queijo cheddar derretido." :
                "Fried parsnips, french fries, chicken wings, tomatoes, crispy bacon, and melted cheddar cheese.",
            ProductImage: fritas,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "combos"
        },
        {
            name: language === 'pt-BR' ? "Batata frita com bacon e cheddar" : "Fries bacon cheddar",
            price: "$13,99",
            description: language === 'pt-BR' ? 
                "Batatas fritas crocantes cobertas com queijo cheddar derretido e bacon picado." :
                "Crispy fries topped with melted cheddar cheese and crumbled bacon.",
            ProductImage: chedar,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "combos"
        },
        {
            name: language === 'pt-BR' ? "Asas de frango e batatas fritas" : "Chicken wings and fries",
            price: "$15,99",
            description: language === 'pt-BR' ? 
                "6 Asas de frango crocantes servidas com batatas fritas douradas." :
                "6 Crispy chicken wings paired with golden fries.",
            ProductImage: frango,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "combos"
        }
    ];

    const salgadinhos = [
        {
            name: language === 'pt-BR' ? "Enroladinho de Salsicha" : "Little Sausage Roll",
            price: "$5,99",
            description: language === 'pt-BR' ? 
                "Enroladinhos de salsicha estilo brasileiro. Disponível nas quantidades: 15, 25, 50 ou 100." :
                "Brazilian-style sausage rolls. Available in quantities: 15, 25, 50, or 100.",
            ProductImage: enroladinho,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "salgadinhos"
        },
        {
            name: language === 'pt-BR' ? "Bolinhos de Queijo com Milho" : "Cheesy Corn Fritters",
            price: "$4,99",
            description: language === 'pt-BR' ? 
                "Bolinhos de queijo brasileiros com milho. Disponível nas quantidades: 15, 25, 50 ou 100." :
                "Brazilian cheese balls infused with corn. Available in quantities: 15, 25, 50, or 100.",
            ProductImage: queijo,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "salgadinhos"
        },
        {
            name: "Coxinha",
            price: "$4,99",
            description: language === 'pt-BR' ? 
                "Coxinhas de frango estilo brasileiro. Disponível nas quantidades: 15, 25, 50 ou 100." :
                "Brazilian-style chicken dumplings. Available in quantities: 15, 25, 50, or 100.",
            ProductImage: coxinha,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "salgadinhos"
        }
    ];

    const bebidas = [
        {
            name: language === 'pt-BR' ? "Lata de Coca-Cola" : "Coke Can",
            price: "$2,99",
            description: language === 'pt-BR' ? 
                "Refrigerante carbonatado com sabor doce de cola." :
                "Carbonated soft drink with a sweet, cola flavor.",
            ProductImage: coke,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "bebidas"
        },
        {
            name: language === 'pt-BR' ? "Lata de Guaraná" : "Guarana Can",
            price: "$2,99",
            description: language === 'pt-BR' ? 
                "Refrigerante brasileiro refrescante feito de guaraná, oferecendo um sabor único e levemente adocicado." :
                "A refreshing Brazilian soda made from guarana berries, offering a unique and slightly sweet flavor.",
            ProductImage: guarana,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "bebidas"
        },
        {
            name: language === 'pt-BR' ? "Garrafa de Coca-Cola" : "Coke bottle",
            price: "$5,50",
            description: language === 'pt-BR' ? 
                "Bebida carbonatada refrescante com um sabor intenso de cola. 2L." :
                "Refreshing carbonated beverage with a bold cola taste. 2L.",
            ProductImage: gcoke,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "bebidas"
        },
        {
            name: language === 'pt-BR' ? "Garrafa de Guaraná" : "Guarana Bottle",
            price: "$5,50",
            description: language === 'pt-BR' ? 
                "Bebida gaseificada feita de guaraná brasileiro. 2L." :
                "Sparkling beverage made from Brazilian guaraná berries. 2L.",
            ProductImage: gguarana,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "bebidas"
        },
        {
            name: language === 'pt-BR' ? "Garrafa de Água" : "Water Bottle",
            price: "$1,99",
            description: language === 'pt-BR' ? 
                "Hidratação pura e refrescante em uma garrafa." :
                "Pure, refreshing hydration in a bottle.",
            ProductImage: agua,
            link: "https://www.doordash.com/store/24952473?utm_source=mx_share",
            category: "bebidas"
        }
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const allItems = [...burgers, ...combos, ...salgadinhos, ...bebidas];

    const openModal = (item: any) => {
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

    // Dados de testemunhos com tradução dinâmica
    const testimonials = [
        {
            rating: 5,
            text: language === 'pt-BR' ? 
                "Os hambúrgueres do King Bites são simplesmente incríveis! O X-Tudo me fez lembrar dos lanches que comia no Brasil. Sem dúvida, o melhor hambúrguer brasileiro que já comi nos EUA!" :
                "King Bites burgers are simply amazing! The X-Tudo reminded me of the sandwiches I used to eat in Brazil. Without a doubt, the best Brazilian burger I've ever had in the USA!",
            name: language === 'pt-BR' ? "Maria Oliveira" : "Mary Oliveira",
            location: "Miami, FL",
            initial: "M"
        },
        {
            rating: 5,
            text: language === 'pt-BR' ? 
                "As coxinhas são autênticas e deliciosas! Peço sempre um combo para levar para casa. Recomendo a todos que querem experimentar o verdadeiro sabor brasileiro." :
                "The coxinhas are authentic and delicious! I always order a combo to take home. I recommend it to everyone who wants to experience the true Brazilian flavor.",
            name: language === 'pt-BR' ? "João Peterson" : "John Peterson",
            location: "Orlando, FL",
            initial: "J"
        },
        {
            rating: 4.5,
            text: language === 'pt-BR' ? 
                "O atendimento é excelente e a comida é ainda melhor! O Combo Especial King Bites vale cada centavo. Ótimo para reunir amigos e família para experimentar a culinária brasileira." :
                "The service is excellent and the food is even better! The King Bites Special Combo is worth every penny. Great for gathering friends and family to experience Brazilian cuisine.",
            name: "Rafael Santos",
            location: "Tampa, FL",
            initial: "R"
        },
        {
            rating: 5,
            text: language === 'pt-BR' ? 
                "Desde que descobri o King Bites, não consigo parar de voltar! Os enroladinhos de salsicha são perfeitos e me fazem lembrar dos lanches que comia nas festas no Brasil. Ambiente acolhedor e staff super simpático!" :
                "Since I discovered King Bites, I can't stop coming back! The sausage rolls are perfect and remind me of the snacks I used to eat at parties in Brazil. Cozy atmosphere and super friendly staff!",
            name: language === 'pt-BR' ? "Amanda Costa" : "Amanda Coast",
            location: "Fort Lauderdale, FL",
            initial: "A"
        },
        {
            rating: 5,
            text: language === 'pt-BR' ? 
                "Finalmente encontrei um lugar que serve Guaraná genuíno! A combinação do X-Bacon com uma lata de Guaraná é imbatível. Os salgadinhos também são muito bons, especialmente as coxinhas." :
                "Finally found a place that serves genuine Guarana! The combination of X-Bacon with a can of Guarana is unbeatable. The snacks are also very good, especially the coxinhas.",
            name: language === 'pt-BR' ? "David Miller" : "David Miller",
            location: "Jacksonville, FL",
            initial: "D"
        }
    ];

    return (
        <div className={styles.menuSection}>
            <div className={styles.menuHero}>
                <h1 className={styles.menuTitle}>{translations['cardapio_king_bites']}</h1>
                <p className={styles.menuSubtitle}>
                    {translations['menu_subtitulo']}
                </p>
            </div>

            <div className={styles.specialOffer}>
                <span className={styles.specialOfferLabel}>{translations['especial']}</span>
                <div className={styles.specialOfferContent}>
                    <div className={styles.specialOfferImage}>
                        <Image
                            src={combo2}
                            alt={translations['combo_especial_king_bites']}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.specialOfferInfo}>
                        <h3 className={styles.specialOfferTitle}>{translations['combo_especial_king_bites']}</h3>
                        <p className={styles.specialOfferDescription}>
                            {translations['combo_especial_desc']}
                        </p>
                        <div className={styles.specialOfferPrice}>$71,99</div>
                        <a href="https://www.doordash.com/store/24952473?utm_source=mx_share"
                           className={`${styles.orderButton} ${styles.orderButtonPrimary}`}
                           target="_blank" rel="noopener noreferrer">
                            <FaShoppingCart className={styles.orderButtonIcon}/> {translations['fazer_pedido']}
                        </a>
                    </div>
                </div>
            </div>

            <nav className={styles.categoriesNav}>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'todos' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('todos')}
                >
                    {translations['todos']}
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'burgers' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('burgers')}
                >
                    {translations['hamburgueres']}
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'combos' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('combos')}
                >
                    {translations['combos']}
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'salgadinhos' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('salgadinhos')}
                >
                    {translations['salgadinhos']}
                </button>
                <button
                    className={`${styles.categoryButton} ${activeCategory === 'bebidas' ? styles.active : ''}`}
                    onClick={() => scrollToCategory('bebidas')}
                >
                    {translations['bebidas']}
                </button>
            </nav>

            <div className={styles.menuContent}>
                <div
                    ref={burgersSectionRef}
                    className={`${styles.categorySection} ${activeCategory !== 'todos' && activeCategory !== 'burgers' ? styles.hidden : ''}`}
                >
                    <div className={styles.categoryHeader}>
                        <FaHamburger className={styles.categoryIcon}/>
                        <h2 className={styles.categoryTitle}>{translations['hamburgueres_brasileiros']}</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        {translations['hamburgueres_desc']}
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
                        <h2 className={styles.categoryTitle}>{translations['combos_acompanhamentos']}</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        {translations['combos_desc']}
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
                        <h2 className={styles.categoryTitle}>{translations['salgadinhos_brasileiros']}</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        {translations['salgadinhos_desc']}
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
                        <h2 className={styles.categoryTitle}>{translations['bebidas_titulo']}</h2>
                    </div>
                    <p className={styles.categoryDescription}>
                        {translations['bebidas_desc']}
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
                    <h3 className={styles.testimonialsTitle}>{translations['o_que_clientes_dizem_menu']}</h3>

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
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.testimonialContent}>
                                            <div className={styles.testimonialRating}>
                                                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                                    <FaStar key={i} />
                                                ))}
                                                {testimonial.rating % 1 === 0.5 && <FaStarHalfAlt />}
                                            </div>
                                            <div className={styles.testimonialText}>
                                                {testimonial.text}
                                            </div>
                                            <div className={styles.testimonialAuthor}>
                                                <div className={styles.authorAvatar}>
                                                    <span>{testimonial.initial}</span>
                                                </div>
                                                <div className={styles.authorInfo}>
                                                    <div className={styles.authorName}>{testimonial.name}</div>
                                                    <div className={styles.authorLocation}>{testimonial.location}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <div className={styles.ctaInner}>
                    <h3 className={styles.ctaTitle}>{translations['experimente_sabor']}</h3>
                    <p className={styles.ctaText}>{translations['experimente_sabor_desc']}</p>
                    <a href="https://www.doordash.com/store/24952473?utm_source=mx_share"
                       className={`${styles.orderButton} ${styles.orderButtonSecondary}`}
                       target="_blank" rel="noopener noreferrer">
                        <FaShoppingCart className={styles.orderButtonIcon}/> {translations['pedir_agora']}
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