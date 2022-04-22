import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>personal</title>
        <meta
          name="description"
          content="Personal portfolio from Aeon Yuon Miller"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <motion.h1 className={styles.title}>Welcome</motion.h1>
      </main>
    </div>
  );
}
