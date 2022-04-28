import { motion } from "framer-motion"
import Layout from "./components/Layout"
import Lottie from "react-lottie";
import animationData from "../public/LOGO.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};


const info = () => {
    return (
      <>
        <motion.div
          exit={{opacity:0, y:-50, transition:{ease:"circIn", duration:0.5, delay: 0.15}}}
          whileHover={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
          drag
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          className="big remove"
        >
          <Lottie options={defaultOptions} />
        </motion.div>
        <Layout>
          <h2>Andreas Y. Müller</h2>
          <div>
            <p><strong>At the age of eleven I learned photoshop from being
              inspired by winamp skins back in the days.</strong></p>
            <p>Have worked for large-scale international and national
              companies. Ranging from automotive, banking, insurance,
              travel, pharma and fashion.</p>
            <p>Currently I am learning to become a web-developer (React).
              My focus is on responsiveness and motion. And reducing the time
              from conception to launch.
            </p>
          </div>
          {/* <h2>Clients</h2>
          <ul>
            <li>Lufthansa</li>
            <li>Land Rover</li>
            <li>Jaguar</li>
            <li>Merck</li>
            <li>Lotto</li>
            <li>Sparkasse</li>
            <li>Abro</li>
            <li>HansaInvest</li>
            <li>AVIS</li>
            <li>DER Touristik</li>
            <li>REWE Group</li>
          </ul> */}
        </Layout>
    </>
  )
}

export default info