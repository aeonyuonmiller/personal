import { motion as m, useScroll, useTransform } from "framer-motion"

const Scroll1 = ({children}) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, .5], [1, -2]);

  return (
    <m.div style={{ opacity: y }}>{children}</m.div>
  )
}

export default Scroll1