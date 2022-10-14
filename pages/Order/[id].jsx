import React from "react";
import styles from "../../styles/Order.module.css";
const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}> 78945637</span>
              </td>
              <td>
                <span className={styles.name}> JIBI DANIEL </span>
              </td>
              <td>
                <span className={styles.Address}>
                  IP EXTENSION METRO,DELHI,92
                </span>
              </td>

              <td>
                <span className={styles.total}>₹719.7</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4108/4108042.png"
              height={30}
              width={30}
              alt=""
            />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1830/1830839.png"
              height={30}
              width={30}
              alt=""
            />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3027/3027212.png"
              height={30}
              width={30}
              alt=""
            />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3269/3269585.png"
              height={30}
              width={30}
              alt=""
            />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
                alt=""
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
