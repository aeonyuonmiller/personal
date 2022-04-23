import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Nav />
    </>
  );
}

export default MyApp;
