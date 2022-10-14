import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img
          src="https://img.freepik.com/premium-psd/delicious-burger-food-menu-social-media-banner-template_106176-574.jpg?size=338&ext=jpg"
          objectfit="cover"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            YES WE CAN WIN THE OFFER AND ENJOY THE MEALS
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURENTS</h1>
          <p className={styles.text}>
            SHOP-G-20.
            <br />
            DILSHAD GARDEN
            <br /> +9120035465859
          </p>

          <p className={styles.text}>
            SHOP-G-20.
            <br />
            DILSHAD GARDEN
            <br /> +9120035465859
          </p>

          <p className={styles.text}>
            SHOP-G-20.
            <br />
            DILSHAD GARDEN
            <br /> +9120035465859
          </p>

          <p className={styles.text}>
            SHOP-G-20.
            <br />
            DILSHAD GARDEN
            <br /> +9120035465859
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONTDAY - SUNDAY
            <br />
            10 AM- 6PM
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>Touch with Us</h1>
          <div className={styles.icon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1177/1177566.png"
              alt=""
              height={30}
              width={30}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/1177/1177585.png"
              alt=""
              height={30}
              width={30}
            />

            <img
              src="https://cdn-icons-png.flaticon.com/128/1177/1177491.png"
              alt=""
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
