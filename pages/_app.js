import "../styles/globals.css";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Nav from "./components/Nav";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <AnimatePresence exitBeforeEnter={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MotionConfig>
      <Nav />
    </>
  );
}

export default MyApp;
