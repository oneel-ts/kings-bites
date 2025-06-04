"use client"

import { Fragment, useEffect, useState } from "react";
import styles from "./home.module.css";
import Link from "next/link";
import { FaHamburger, FaInstagram, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';
import salgadinhos from "../../../../../public/assets/salgadinhos-KB.jpg"
import Xtudo from "../../../../../public/assets/x-tudo-KB.jpg"
import frangoFritas from "../../../../../public/assets/frango-e-fritas-KB.jpg"
import pizzaLanche from "../../../../../public/assets/pizza-lanche-KB.jpg"
import Image from "next/image";


export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Fragment>
            <section className={styles.homeSection}>
                <div className={`${styles.heroContainer} ${isVisible ? styles.show : ''}`}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.homeTitle}>
                            KING BITES
                        </h1>
                        <h2 className={styles.homeSlogan}>SABOR BRASILEIRO NOS EUA</h2>

                        <p className={styles.homeDescription}>
                            Experimente os mais deliciosos lanches com aquele <strong>tempero autêntico</strong> do Brasil,
                            em um ambiente acolhedor que vai te fazer sentir em casa.
                        </p>

                        <div className={styles.ctaContainer}>
                            <Link href="/menu" className={styles.homeCta}>
                                <FaUtensils className={styles.ctaIcon} /> CARDÁPIO COMPLETO
                            </Link>
                            <Link href="https://www.instagram.com/kingbites2023/" className={styles.homeCtaSecondary}>
                                <FaInstagram className={styles.ctaIcon} /> INSTAGRAM
                            </Link>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img
                            src="/assets/frenteR.jpeg"
                            alt="Hambúrguer artesanal King Bites"
                            className={styles.homeBanner}
                        />
                    </div>
                </div>

                <div className={styles.featuresContainer}>
                    <div className={styles.featureCard}>
                        <FaHamburger className={styles.featureIcon} />
                        <h3>SABOR REAL</h3>
                        <p>Lanches artesanais preparados com ingredientes selecionados</p>
                    </div>

                    <div className={styles.featureCard}>
                        <FaMapMarkerAlt className={styles.featureIcon} />
                        <h3>AMBIENTE BRASILEIRO</h3>
                        <p>Música, decoração e aquele atendimento caloroso do Brasil</p>
                    </div>

                    <div className={styles.featureCard}>
                        <FaUtensils className={styles.featureIcon} />
                        <h3>PRATOS EXCLUSIVOS</h3>
                        <p>Combinações únicas que só encontra aqui no King Bites</p>
                    </div>
                </div>

                <div className={styles.gallerySection}>
                    <h2 className={styles.galleryTitle}>NOSSOS DESTAQUES</h2>
                    <div className={styles.galleryGrid}>
                        <div className={styles.galleryItem}>
                            <Image
                                src={salgadinhos}
                                alt="Salgadinhos brasileiros"
                                width={400}
                                height={300}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className={styles.galleryItem}>
                            <Image
                                src={Xtudo}
                                alt="X-Tudo hambúrguer"
                                width={400}
                                height={300}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className={styles.galleryItem}>
                            <Image
                                src={frangoFritas}
                                alt="Frango com fritas"
                                width={400}
                                height={300}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className={styles.galleryItem}>
                            <Image
                                src={pizzaLanche}
                                alt="Pizza e lanche"
                                width={400}
                                height={300}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.testimonialSection}>
                    <div className={styles.testimonialContent}>
                        <h2>O QUE NOSSOS CLIENTES DIZEM</h2>
                        <div className={styles.testimonialQuote}>
                            O melhor hambúrguer brasileiro que já comi fora do Brasil. Me senti em casa!
                        </div>
                        <div className={styles.testimonialAuthor}>- João Silva, Cliente desde 2023</div>
                    </div>
                </div>

                <div className={styles.ctaFooter}>
                    <h2 className={styles.ctaTitle}>KING BITES. ONDE O SABOR É VERDADEIRAMENTE REI.</h2>
                    <Link href="/menu" className={styles.homeCta}>
                        EXPERIMENTE AGORA
                    </Link>
                </div>
            </section>
        </Fragment>
    );
}