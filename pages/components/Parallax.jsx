import { motion as m, useScroll, useTransform } from "framer-motion"

const Parallax = ({children}) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [1, 200]);

  return (
    <m.div style={{ y: y }}>{children}</m.div>
  )
}

export default Parallax