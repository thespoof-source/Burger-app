import Image from "next/image";
import React from "react";
import styles from "../styles/BurgerCart.module.css";
const BurgerCart = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://burgerking-image.s3.amazonaws.com/category/Home/web/1x_web_20201214094752825353_114x101png"
        alt=""
        width={150}
        height={150}
      />
      <h1 className={styles.title}> VEG MAKHANI BURST</h1>
      <span className={styles.price}>₹ 238.9</span>
      <p className={styles.desc}>
        Large burger with big patties and fresh meals just eat and enjoy the
        burger with meals have a good Large burger with big patties and fresh
        meals just eat and enjoy the burger with meals have a good
      </p>
    </div>
  );
};

export default BurgerCart;
