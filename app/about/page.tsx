import styles from './about-default.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Us</h2>
      <p>  
        <strong>
          🍔 King Bites
        </strong> 
       was born from a true passion for real burgers. We believe that every bite should be unforgettable — 
        that’s why we use fresh ingredients, juicy meats, and original recipes that turn anyone into a fan.
      </p>
        <p>
           Our mission is simple: deliver a unique experience where flavor rules. From the soft bun to the handcrafted patty and our homemade sauces, 
        every detail is made with care so you always leave satisfied.
        </p>
        <p>
          More than just a burger joint, we’re a go-to spot for those who love great food, chill vibes, and king-worthy service.
        </p>
        <p> 
          <strong>
            👑 King Bites. Where flavor is king.
            </strong>
        </p>

        <h2 className={styles.aboutTitle}>Mission</h2>
       <p> 🧑‍🍳 
        <strong>
          To serve high-quality handcrafted food, delivering a flavorful, welcoming, and memorable experience for every 
          customer  — always with fresh ingredients, excellent service, and passion in every detail
          </strong>
        </p> 
        <div className={styles.aboutHighlights}>
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>🍔</div>
            <h3>Fresh Ingredients</h3>
            <p>Every day from the producer straight to your table</p>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>👨‍🍳</div>
            <h3>Specialized Chefs</h3>
            <p>Artisanal preparation with exclusive techniques</p>
          </div>
          
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>❤️</div>
            <h3>Made with Love</h3>
            <p>Each burger is prepared with care</p>
          </div>
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>👑</div>
            <h3>Customer is King</h3>
            <p>Every customer is treated like royalty — with respect, care, and top-quality service.</p>
          </div>
          <div className={styles.highlightItem}>
            <div className={styles.highlightIcon}>🎯</div>
            <h3>Excellence Always</h3>
            <p>From our kitchen to your table, we strive for nothing less than excellence in everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}