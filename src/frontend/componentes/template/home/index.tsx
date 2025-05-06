import {Fragment} from "react";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home () {
    return (
        <Fragment>
            <section className={styles.homeSection}>
                <h1 className={styles.homeTitle}>Welcome to King Bites</h1>
                <p className={styles.homeSubtitle}>At King Bites, every flavor is treated like royalty. </p>
                <p>
                    Whether it’s a juicy burger, a crispy snack, or any other delight from our menu
                    
                </p>
                <p>
                    here you’ll find an explosion of flavors in a cozy and feel-good atmosphere.
                </p>
                <p>
                    <strong>
                    Make yourself at home, pick your favorite, and enjoy every bite.
                    </strong>        
                </p>
                
                    <h2>
                        <strong>
                        👑 King Bites. Where flavor is truly king.
                        </strong>
                    </h2>
                
                <img
                    src="/assets/frenteR.jpeg"
                    alt="Hambúrguer artesanal King Bites"
                    className={styles.homeBanner}
                />

                <Link href="/menu" className={styles.homeCta}>
                See full menu
                </Link>
                <Link href="https://www.instagram.com/kingbites2023/" className={styles.homeCta}>
                        instagram
                </Link>
            </section>
        </Fragment>
    )
}