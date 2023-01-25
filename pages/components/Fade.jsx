import { motion as m } from "framer-motion"
import dynamic from "next/dynamic";

const Fade = ({children}) => {
    const fade = {
        hide: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition:{ duration: 1 }}
    }

  return (
    <m.p variants={fade} initial="hide" whileInView="show" exit="hide" viewport={{ amount: 0.4, once: true }}>
      {children}
    </m.p>
  )
}

// export default Fade
export default dynamic (() => Promise.resolve(Fade), {ssr: false})