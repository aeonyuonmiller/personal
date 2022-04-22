import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import portrait from "../public/portrait.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>personal</title>
        <meta
          name="description"
          content="Personal portfolio from Aeon Yuon Miller"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <motion.h1>Welcome</motion.h1>
        <Image
          src={portrait}
          objectFit="fill"
          alt="Portrait of Aeon Yuon Miller"
        />
      </Layout>
    </div>
  );
}
