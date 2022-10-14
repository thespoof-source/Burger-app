import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img
            src="https://img.icons8.com/fluency/2x/phone-disconnected.png"
            alt=""
            color="white"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>01245673893</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="160px" height="96px" />
          <li className={styles.listItem}>Near reatuarnt</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/711/711897.png"
            alt=""
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
