'use client';

import styles from './about-default.module.css';
import Link from "next/link";
import {FaShoppingCart} from 'react-icons/fa';
import {
    FaLeaf, FaUtensilSpoon, FaHeart, FaCrown,
    FaBullseye, FaGlobeAmericas
} from 'react-icons/fa';
import { useLanguage } from "@/context";

export default function About() {
    const { translations } = useLanguage();

    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutHero}>
                <h1 className={styles.aboutTitle}>{translations['sobre_king_bites']}</h1>
            </div>

            <div className={styles.aboutContent}>
                <div className={styles.storySection} data-section="story">
                    <div className={styles.storyContent}>
                        <h2 className={styles.aboutTitle}>{translations['nossa_historia']}</h2>
                        <p className={styles.aboutText}>
                            <strong>King Bites</strong> {translations['historia_paragrafo1']}
                        </p>
                        <p className={styles.aboutText}>
                            {translations['historia_paragrafo2']}
                        </p>
                        <p className={styles.aboutText}>
                            {translations['historia_paragrafo3']}
                        </p>
                        <p className={styles.aboutText}>
                            <strong>{translations['historia_paragrafo4']}</strong>
                        </p>
                    </div>

                    <div className={styles.storyImage}>
                        {/*<Image */}
                        {/*  src={storeImage} */}
                        {/*  alt="Fachada da loja King Bites" */}
                        {/*  fill*/}
                        {/*  style={{objectFit: 'cover'}}*/}
                        {/*/>*/}
                    </div>
                </div>

                <div className={styles.valuesContainer} data-section="values">
                    <h2 className={styles.valuesTitle}>{translations['nossa_missao']}</h2>
                    <div className={styles.missionStatement}>
                        <p className={styles.missionText}>
                            <strong>{translations['missao_statement']}</strong>
                        </p>
                    </div>

                    <div className={styles.aboutHighlights}>
                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaLeaf className={styles.valueIcon}/>
                            </div>
                            <h3>{translations['ingredientes_frescos']}</h3>
                            <p>{translations['ingredientes_frescos_desc']}</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaUtensilSpoon className={styles.valueIcon}/>
                            </div>
                            <h3>{translations['chefs_especializados']}</h3>
                            <p>{translations['chefs_especializados_desc']}</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaHeart className={styles.valueIcon}/>
                            </div>
                            <h3>{translations['feito_com_amor']}</h3>
                            <p>{translations['feito_com_amor_desc']}</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaCrown className={styles.valueIcon}/>
                            </div>
                            <h3>{translations['cliente_rei']}</h3>
                            <p>{translations['cliente_rei_desc']}</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaBullseye className={styles.valueIcon}/>
                            </div>
                            <h3>{translations['excelencia_sempre']}</h3>
                            <p>{translations['excelencia_sempre_desc']}</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaGlobeAmericas className={styles.valueIcon}/>
                            </div>
                            <h3>{translations['sabores_brasil']}</h3>
                            <p>{translations['sabores_brasil_desc']}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineSection} data-section="timeline">
                    <h2 className={styles.timelineTitle}>{translations['nossa_trajetoria']}</h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2020</div>
                            <div className={styles.timelineContent}>
                                <h3>{translations['ideia']}</h3>
                                <p>{translations['ideia_desc']}</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2021</div>
                            <div className={styles.timelineContent}>
                                <h3>{translations['primeiros_passos']}</h3>
                                <p>{translations['primeiros_passos_desc']}</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2022</div>
                            <div className={styles.timelineContent}>
                                <h3>{translations['expansao_cardapio']}</h3>
                                <p>{translations['expansao_cardapio_desc']}</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2023</div>
                            <div className={styles.timelineContent}>
                                <h3>{translations['reconhecimento_local']}</h3>
                                <p>{translations['reconhecimento_local_desc']}</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2024</div>
                            <div className={styles.timelineContent}>
                                <h3>{translations['presente_futuro']}</h3>
                                <p>{translations['presente_futuro_desc']}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaTitle}>{translations['venha_experimentar']}</h2>
                    <p className={styles.ctaText}>
                        {translations['venha_experimentar_desc']}
                    </p>
                    <Link href="/menu" className={styles.ctaButton}>
                        <FaShoppingCart className={styles.ctaButtonIcon}/> {translations['ver_cardapio']}
                    </Link>
                </div>
            </div>
        </section>
    );
}