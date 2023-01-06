import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, MotionConfig } from "framer-motion";

// components
import Logo from "./components/Logo"
import Connect from "./components/Connect"

export default function App({ Component, pageProps, router }: AppProps) {
  return <>
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      <Connect />
      <Logo />
      </MotionConfig>
  </>
}