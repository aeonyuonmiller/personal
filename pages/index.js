import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import portrait from "../public/portrait.png";
import Logo from "./components/Logo";

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
        <Logo color="var(--foreground)" width="100%" />
        <Image
          quality={100}
          src={portrait}
          objectFit="fill"
          alt="Portrait of Aeon Yuon Miller"
        />
      </Layout>
    </div>
  );
}
