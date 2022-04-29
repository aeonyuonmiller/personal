import "../styles/globals.css";
// import splitbee from "@splitbee/web";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Nav from "./components/Nav";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <AnimatePresence exitBeforeEnter={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MotionConfig>
      <Nav />
    </>
  );
}

export default MyApp;
