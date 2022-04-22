import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
