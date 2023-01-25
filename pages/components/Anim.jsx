import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

const Anim = ({ children }) => {
  // const words = children.split(/(\s+)/)
  // const words = children.split(/\b(\s)/)
  const words = children.split("\\s+")
   
  return (
    <div>
      {words.map((word, index) => (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity:1 }}
          style={{ marginBottom: 20, marginRight: "1rem", display: "block", whiteSpace: "no-wrap" }}
          key={index}
        >
          {word.split('').map((letter, index) => (
            <motion.span
              style={{ display: "inline-block", whiteSpace: "no-wrap" }}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition:{ ease:[.76,-0.01,.25,.98], duration: .6, delay: index * 0.05 }}}
              exit={{ y: -20, opacity: 0, transition:{ ease:[.76,-0.01,.25,.98], duration: .3, delay: index * 0.05, }}}
            >
              {letter}
            </motion.span>
          ))}
          {" "}
        </motion.h1>
      ))}
    </div>
  );
}

// export default Anim
export default dynamic (() => Promise.resolve(Anim), {ssr: false})