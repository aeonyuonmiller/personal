import Head from "next/head";
import Layout from "./components/Layout";
import Logo from "./components/Logo";
import { motion } from "framer-motion";
import portrait from "../public/portrait.png";
import Image from "next/image";

const imageAnim = {
  intro: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 1, delay: 0.2 },
  },
  exit: { opacity: 0, x: 30, transition: { type: "tween", duration: 1 } },
};

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

      <motion.div
        variants={imageAnim}
        initial="intro"
        animate="show"
        exit="exit"
        transition="transition"
        className="portrait"
      >
        <Image
          quality={100}
          src={portrait}
          objectFit="fill"
          alt="Portrait of Aeon Yuon Miller"
        />
      </motion.div>

      <Layout>
        <h2 className="end">digital designer / frontend developer</h2>
        <div className="move">
          <Logo color="var(--bg)" width="70%" />
        </div>
      </Layout>
    </div>
  );
}
