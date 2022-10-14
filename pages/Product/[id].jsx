import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
const Product = () => {
  const [size, setSize] = useState(0);
  const burger = {
    id: 1,
    img: "https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20220613110558021522_482x264jpg",
    name: "BK CLASSIC VEG",
    price: [182, 238.9, 380.9],
    desc: "fresh ans good burger with cheese and fresh veg overloaded",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img
            src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210914072502784628_482x264jpg"
            objectfit="contain"
            layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{burger.name}</h1>
        <span className={styles.price}>${burger.price[size]}</span>
        <p className={styles.desc}>{burger.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/burger3.jpeg" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>

          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/burger3.jpeg" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>

          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/burger3.jpeg" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingrdients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}></button>ADD TO CARD
        </div>
      </div>
    </div>
  );
};

export default Product;
