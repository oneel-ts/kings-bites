"use client"

import { useEffect, useState } from "react";
import styles from "./home.module.css";
import Link from "next/link";
import { 
  FaHamburger, 
  FaInstagram, 
  FaUtensils, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaFireAlt, 
  FaGlobe
} from 'react-icons/fa';
import { IoFastFood, IoRestaurant } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import salgadinhos from "../../../../../public/assets/salgadinhos-KB.jpg"
import Xtudo from "../../../../../public/assets/x-tudo-KB.jpg"
import frangoFritas from "../../../../../public/assets/frango-e-fritas-KB.jpg"
import pizzaLanche from "../../../../../public/assets/pizza-lanche-KB.jpg"
import Image from "next/image";
import { useLanguage } from "@/context";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const { translations } = useLanguage();

    useEffect(() => {
        setIsVisible(true);
        
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 3);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);

    const newTexts = {
        pt: {
            experiencia_premium: "EXPERIÊNCIA PREMIUM",
            tecnologia_sabor: "TECNOLOGIA E SABOR",
            insumos_selecionados: "INSUMOS SELECIONADOS",
            gastronomia_moderna: "GASTRONOMIA MODERNA",
            entrega_expresso: "ENTREGA EXPRESSA",
            nossa_localizacao: "LOCALIZAÇÃO PRIVILEGIADA",
            explore_sabores: "EXPLORE NOSSOS SABORES",
            conecte_se: "CONECTE-SE CONOSCO",
            escolha_qualidade: "ESCOLHA QUALIDADE",
            visite_agora: "VISITE AGORA",
            descubra_mais: "DESCUBRA MAIS"
        },
        en: {
            experiencia_premium: "PREMIUM EXPERIENCE",
            tecnologia_sabor: "TECHNOLOGY & FLAVOR",
            insumos_selecionados: "SELECTED INGREDIENTS",
            gastronomia_moderna: "MODERN GASTRONOMY",
            entrega_expresso: "EXPRESS DELIVERY",
            nossa_localizacao: "PRIME LOCATION",
            explore_sabores: "EXPLORE OUR FLAVORS",
            conecte_se: "CONNECT WITH US",
            escolha_qualidade: "CHOOSE QUALITY",
            visite_agora: "VISIT NOW",
            descubra_mais: "DISCOVER MORE"
        }
    };

    const currentLang = useLanguage().language === 'pt-BR' ? 'pt' : 'en';
    const t = newTexts[currentLang];

    return (
        <main className={styles.homeSection}>
            <section className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroTextContainer}>
                        <div className={styles.heroTitleWrapper}>
                            <h1 className={styles.heroTitle}>KING BITES</h1>
                            <div className={styles.accentBar}></div>
                        </div>
                        <h2 className={styles.heroSlogan}>{translations['slogan']}</h2>
                        <p className={styles.heroDescription}>
                            {translations['descricao']}
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link href="/menu" className={styles.primaryCta}>
                                <span>{translations['cardapio_completo']}</span>
                                <FaArrowRight className={styles.ctaIcon} />
                            </Link>
                            <Link href="https://www.instagram.com/kingbites2023/" className={styles.secondaryCta}>
                                <FaInstagram className={styles.ctaIcon} />
                                <span>INSTAGRAM</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroImageContainer}>
                        <div className={styles.heroImageWrapper}>
                            <Image
                                src="/assets/frenteR.jpeg"
                                alt="Hambúrguer artesanal King Bites"
                                className={styles.heroImage}
                            />
                            <div className={styles.imageBadge}>
                                <FaFireAlt />
                                <span>{t.experiencia_premium}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.scrollIndicator}>
                    <span></span>
                </div>
            </section>

            <section className={styles.conceptsSection}>
                <div className={styles.conceptsHeader}>
                    <h2>{t.tecnologia_sabor}</h2>
                    <p>{t.insumos_selecionados}</p>
                </div>
                
                <div className={styles.conceptsGrid}>
                    <div className={`${styles.conceptCard} ${activeFeature === 0 ? styles.active : ''}`}>
                        <div className={styles.conceptIconWrapper}>
                            <FaHamburger className={styles.conceptIcon} />
                        </div>
                        <h3>{translations['sabor_real']}</h3>
                        <p>{translations['sabor_real_desc']}</p>
                        <div className={styles.conceptLink}>
                            <span>{t.descubra_mais}</span>
                            <FaArrowRight />
                        </div>
                    </div>

                    <div className={`${styles.conceptCard} ${activeFeature === 1 ? styles.active : ''}`}>
                        <div className={styles.conceptIconWrapper}>
                            <FaMapMarkerAlt className={styles.conceptIcon} />
                        </div>
                        <h3>{translations['ambiente_brasileiro']}</h3>
                        <p>{translations['ambiente_brasileiro_desc']}</p>
                        <div className={styles.conceptLink}>
                            <span>{t.descubra_mais}</span>
                            <FaArrowRight />
                        </div>
                    </div>

                    <div className={`${styles.conceptCard} ${activeFeature === 2 ? styles.active : ''}`}>
                        <div className={styles.conceptIconWrapper}>
                            <FaUtensils className={styles.conceptIcon} />
                        </div>
                        <h3>{translations['pratos_exclusivos']}</h3>
                        <p>{translations['pratos_exclusivos_desc']}</p>
                        <div className={styles.conceptLink}>
                            <span>{t.descubra_mais}</span>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className={styles.galleryHeader}>
                    <h2>{translations['nossos_destaques']}</h2>
                    <div className={styles.galleryDivider}></div>
                    <p>{t.explore_sabores}</p>
                </div>

                <div className={styles.galleryLayout}>
                    <div className={styles.galleryFeatureLeft}>
                        <div className={styles.galleryItemLarge}>
                            <Image
                                src={Xtudo}
                                alt={translations['x_tudo_hamburguer']}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                                className={styles.galleryImage}
                            />
                            <div className={styles.galleryOverlay}>
                                <h3>{translations['x_tudo_hamburguer']}</h3>
                                <div className={styles.galleryTag}>
                                    <IoFastFood />
                                    <span>{t.gastronomia_moderna}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.galleryGrid}>
                        <div className={styles.galleryItem}>
                            <Image
                                src={salgadinhos}
                                alt={translations['salgadinhos_brasileiros']}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                style={{ objectFit: 'cover' }}
                                className={styles.galleryImage}
                            />
                            <div className={styles.galleryOverlay}>
                                <h3>{translations['salgadinhos_brasileiros']}</h3>
                            </div>
                        </div>
                        
                        <div className={styles.galleryItem}>
                            <Image
                                src={frangoFritas}
                                alt={translations['frango_com_fritas']}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                style={{ objectFit: 'cover' }}
                                className={styles.galleryImage}
                            />
                            <div className={styles.galleryOverlay}>
                                <h3>{translations['frango_com_fritas']}</h3>
                            </div>
                        </div>
                        
                        <div className={styles.galleryItem}>
                            <Image
                                src={pizzaLanche}
                                alt={translations['pizza_e_lanche']}
                                fill
                                sizes="(max-width: 768px) 100vw, 25vw"
                                style={{ objectFit: 'cover' }}
                                className={styles.galleryImage}
                            />
                            <div className={styles.galleryOverlay}>
                                <h3>{translations['pizza_e_lanche']}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.finalCtaSection}>
                <div className={styles.finalCtaOverlay}></div>
                <div className={styles.finalCtaContent}>
                    <h2>{translations['slogan_final']}</h2>
                    <div className={styles.ctaFeatures}>
                        <div className={styles.ctaFeatureItem}>
                            <div className={styles.ctaFeatureIcon}>
                                <MdLocationOn />
                            </div>
                            <span>{t.nossa_localizacao}</span>
                        </div>
                        <div className={styles.ctaFeatureItem}>
                            <div className={styles.ctaFeatureIcon}>
                                <IoRestaurant />
                            </div>
                            <span>{t.escolha_qualidade}</span>
                        </div>
                        <div className={styles.ctaFeatureItem}>
                            <div className={styles.ctaFeatureIcon}>
                                <FaGlobe />
                            </div>
                            <span>{t.conecte_se}</span>
                        </div>
                    </div>
                    <Link href="/menu" className={styles.finalCta}>
                        <span>{translations['experimente_agora']}</span>
                        <FaArrowRight className={styles.finalCtaIcon} />
                    </Link>
                </div>
            </section>
        </main>
    );
}