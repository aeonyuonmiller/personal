import { m } from 'framer-motion';
import dynamic from "next/dynamic";

// H1 letter animation component
const Anim = ({ children }) => {
  // const words = children.split("/(\s+)/")
  // const words = children.split(/\b(\s)/)
  // const words = children.split("\\s+")
  const words = children.split("/\S/g")
   
  return (
    <div>
      {words.map((word, index) => (
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity:1 }}
          style={{ marginBottom: 20 }}
          key={index}
        >
          {word.split('').map((letter, index) => (
            <m.span
              style={{ display: "inline-block", whiteSpace: "no-wrap" }}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition:{ ease:[.76,-0.01,.25,.98], duration: .6, delay: index * 0.05 }}}
              exit={{ y: -20, opacity: 0, transition:{ ease:[.76,-0.01,.25,.98], duration: .3, delay: index * 0.05, }}}
            >
              {letter}
            </m.span>
          ))}
          {" "}
        </m.h1>
      ))}
    </div>
  );
}

// export default Anim
export default dynamic (() => Promise.resolve(Anim), {ssr: false})