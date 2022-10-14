import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import BurgerList from "../components/BurgerList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza restaurant App in Newcastle</title>
        <meta name="description" content="Best Pizza restaurant in this Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <BurgerList />
    </div>
  );
}
