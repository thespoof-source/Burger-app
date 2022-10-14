import React from "react";
import styles from "../styles/Cart.module.css";
const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img
                  src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210914072502784628_482x264jpg"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> BG CLASSIC</span>
            </td>
            <td>
              <span className={styles.extras}> DOUBLE CHEESY </span>
            </td>
            <td>
              <span className={styles.price}>₹239.9</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>₹719.7</span>
            </td>
          </tr>

          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <img
                  src="https://burgerking-image.s3.amazonaws.com/products/PLP/web/2x_web_20210914072502784628_482x264jpg"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> BG CLASSIC</span>
            </td>
            <td>
              <span className={styles.extras}> DOUBLE CHEESY </span>
            </td>
            <td>
              <span className={styles.price}>₹239.9</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>₹719.7</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal:</b>₹239.9
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>₹0.0
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>₹719.9
          </div>
          <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
