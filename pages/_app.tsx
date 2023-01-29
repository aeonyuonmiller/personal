import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import { AnimatePresence, MotionConfig } from "framer-motion";

// components
import Logo from "./components/Logo"
// import Menu from "./components/Menu"
import Connect from "./components/Connect"
import Copyright from "./components/Copyright"

export default function App({ Component, pageProps, router }: AppProps) {

  return <>
      <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" onExitComplete={() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }}>
        <Component {...pageProps} key={router.pathname} />
        <Analytics />
      </AnimatePresence>
      <Connect />
      <Logo />
      <Copyright />
      {/* <Menu /> */}
      </MotionConfig>
  </>
}