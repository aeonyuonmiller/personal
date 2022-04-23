import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import portrait from "../public/portrait.png";
import Logo from "./components/Logo";

const imageAnim = {
  intro: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 1, delay: 0.1 },
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

      <Layout>
        <Logo color="var(--foreground)" width="100%" />
      </Layout>
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
    </div>
  );
}
