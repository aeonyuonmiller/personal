import { motion } from 'framer-motion';

const Anim = ({ children }) => {
  const words = children.split(/\s+/)
  return (
    <div>
      {words.map((word, index) => (
        <motion.h1
          style={{marginBottom:"1em"}}
          key={index}
        >
          {word.split('').map((letter, index) => (
            <motion.span
              style={{ display: "inline-block", whiteSpace: "no-wrap" }}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition:{ ease:[.76,-0.01,.25,.98], duration: .6, delay: index * 0.1 }}}
              exit={{ y: -20, opacity: 0, transition:{ ease:[.76,-0.01,.25,.98], duration: .3, delay: index * 0.1, }}}
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


export default Anim
