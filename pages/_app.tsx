import type { AppProps } from 'next/app'
// import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import { LazyMotion, domAnimation, AnimatePresence, MotionConfig } from "framer-motion";

// components
import Logo from "./components/Logo"
// import Menu from "./components/Menu"
import Connect from "./components/Connect"
import Copyright from "./components/Copyright"

export default function App({ Component, pageProps, router }: AppProps) {

  return <>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
        <Analytics />
      </AnimatePresence>
      <Connect />
      <Logo />
        <Copyright />
        </LazyMotion>
      {/* <Menu /> */}
      </MotionConfig>
  </>
}