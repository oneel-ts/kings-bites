import {Fragment} from "react";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home () {
    return (
        <Fragment>
            <section className={styles.homeSection}>
                <h1 className={styles.homeTitle}>King Bites</h1>
                <p className={styles.homeSubtitle}>Sabores incríveis, feitos com carinho e ingredientes frescos</p>

                <img
                    src="/assets/banner.jpg"
                    alt="Hambúrguer artesanal King Bites"
                    className={styles.homeBanner}
                />

                <Link href="/menu" className={styles.homeCta}>
                    Ver Cardápio Completo
                </Link>
            </section>
        </Fragment>
    )
}