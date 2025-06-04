'use client';

import styles from './about-default.module.css';
import Link from "next/link";
import {FaShoppingCart} from 'react-icons/fa';
import {
    FaLeaf, FaUtensilSpoon, FaHeart, FaCrown,
    FaBullseye, FaGlobeAmericas
} from 'react-icons/fa';

export default function About() {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutHero}>
                <h1 className={styles.aboutTitle}>SOBRE O KING BITES</h1>
            </div>

            <div className={styles.aboutContent}>
                <div className={styles.storySection} data-section="story">
                    <div className={styles.storyContent}>
                        <h2 className={styles.aboutTitle}>NOSSA HISTÓRIA</h2>
                        <p className={styles.aboutText}>
                            <strong>King Bites</strong> nasceu de uma verdadeira paixão pela culinária brasileira.
                            Acreditamos que cada mordida deve ser inesquecível — por isso usamos ingredientes frescos,
                            carnes suculentas e receitas originais que transformam qualquer pessoa em fã.
                        </p>
                        <p className={styles.aboutText}>
                            Nossa missão é simples: entregar uma experiência única onde o sabor é rei. Do pão macio ao
                            hambúrguer artesanal e nossos molhos caseiros, cada detalhe é feito com carinho para que
                            você sempre saia satisfeito.
                        </p>
                        <p className={styles.aboutText}>
                            Mais do que apenas uma hamburgueria, somos um ponto de encontro para quem ama boa comida,
                            ambiente descontraído e atendimento de primeira.
                        </p>
                        <p className={styles.aboutText}>
                            <strong>King Bites. Onde o sabor é rei.</strong>
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
                    <h2 className={styles.valuesTitle}>NOSSA MISSÃO</h2>
                    <div className={styles.missionStatement}>
                        <p className={styles.missionText}>
                            <strong>Servir comida artesanal de alta qualidade, proporcionando uma experiência saborosa,
                                acolhedora e memorável para cada cliente — sempre com ingredientes frescos, excelente
                                atendimento e paixão em cada detalhe.</strong>
                        </p>
                    </div>

                    <div className={styles.aboutHighlights}>
                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaLeaf className={styles.valueIcon}/>
                            </div>
                            <h3>Ingredientes Frescos</h3>
                            <p>Do produtor direto para sua mesa, garantimos frescor e qualidade em cada refeição</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaUtensilSpoon className={styles.valueIcon}/>
                            </div>
                            <h3>Chefs Especializados</h3>
                            <p>Preparação artesanal com técnicas exclusivas e conhecimento da culinária brasileira</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaHeart className={styles.valueIcon}/>
                            </div>
                            <h3>Feito com Amor</h3>
                            <p>Cada lanche é preparado com carinho, como se estivéssemos cozinhando para nossa própria
                                família</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaCrown className={styles.valueIcon}/>
                            </div>
                            <h3>Cliente é Rei</h3>
                            <p>Cada cliente é tratado como realeza — com respeito, cuidado e serviço de alta
                                qualidade</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaBullseye className={styles.valueIcon}/>
                            </div>
                            <h3>Excelência Sempre</h3>
                            <p>Da nossa cozinha à sua mesa, buscamos nada menos que excelência em tudo o que fazemos</p>
                        </div>

                        <div className={styles.highlightItem}>
                            <div className={styles.iconCircle}>
                                <FaGlobeAmericas className={styles.valueIcon}/>
                            </div>
                            <h3>Sabores do Brasil</h3>
                            <p>Trazemos a autenticidade da gastronomia brasileira para o coração dos Estados Unidos</p>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineSection} data-section="timeline">
                    <h2 className={styles.timelineTitle}>NOSSA TRAJETÓRIA</h2>

                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2020</div>
                            <div className={styles.timelineContent}>
                                <h3>A Ideia</h3>
                                <p>King Bites começa como um sonho de trazer os verdadeiros sabores brasileiros para os
                                    EUA.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2021</div>
                            <div className={styles.timelineContent}>
                                <h3>Primeiros Passos</h3>
                                <p>Inauguração da primeira loja, com apenas um pequeno cardápio de hambúrgueres e
                                    salgadinhos brasileiros.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2022</div>
                            <div className={styles.timelineContent}>
                                <h3>Expansão do Cardápio</h3>
                                <p>Adicionamos novos itens ao menu, incluindo mais opções de salgadinhos e lanches
                                    brasileiros.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2023</div>
                            <div className={styles.timelineContent}>
                                <h3>Reconhecimento Local</h3>
                                <p>King Bites é reconhecido como uma das melhores hamburguerias brasileiras da
                                    região.</p>
                            </div>
                        </div>

                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDate}>2024</div>
                            <div className={styles.timelineContent}>
                                <h3>Presente e Futuro</h3>
                                <p>Continuamos a crescer e inovar, sempre mantendo a autenticidade e o sabor que nos
                                    tornaram famosos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ctaSection}>
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaTitle}>VENHA EXPERIMENTAR</h2>
                    <p className={styles.ctaText}>
                        Estamos esperando por você para experimentar o melhor da culinária brasileira nos Estados
                        Unidos. Hambúrgueres artesanais, salgadinhos tradicionais e muito mais!
                    </p>
                    <Link href="/menu" className={styles.ctaButton}>
                        <FaShoppingCart className={styles.ctaButtonIcon}/> VER CARDÁPIO
                    </Link>
                </div>
            </div>
        </section>
    );
}