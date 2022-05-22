import "../styles/globals.css";
import splitbee from "@splitbee/web";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Nav from "./components/Nav";

splitbee.init({
  token: "GK0UJII65H1L",
  disableCookie: true,
  // Set custom urls when using proxying
  scriptUrl: "https://cdn.splitbee.io/sb.js",
  apiUrl: "https://hive.splitbee.io",
});

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
