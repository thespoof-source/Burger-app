import styles from "../styles/BurgerList.module.css";
import BurgerCart from "./BurgerCart";
const BurgerList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> THE BEST AND FRESH BURGER</h1>
      <p className={styles.desc}>
        Large burger with big patties and fresh meals just eat and enjoy the
        burger with meals have a good Large burger with big patties and fresh
        meals just eat and enjoy the burger with meals have a good
      </p>
      <div className={styles.wrapper}>
        <BurgerCart />
        <BurgerCart />
        <BurgerCart />
        <BurgerCart />
        <BurgerCart />
        <BurgerCart />
        <BurgerCart />
        <BurgerCart />
      </div>
    </div>
  );
};

export default BurgerList;
