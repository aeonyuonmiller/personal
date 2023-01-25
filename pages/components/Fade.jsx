import { motion as m } from "framer-motion"

const Fade = ({children}) => {
    const fade = {
        hide: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition:{ duration: 1 }}
    }

  return (
    <m.span variants={fade} initial="hide" whileInView="show" exit="hide">{children}</m.span>
  )
}

export default Fade