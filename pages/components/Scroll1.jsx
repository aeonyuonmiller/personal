import { motion as m, useScroll, useTransform } from "framer-motion"

const Scroll1 = ({children}) => {
    const { scrollYProgress } = useScroll();
    const trans = useTransform(scrollYProgress, [0.2, 1], [1, -2]);
    const y = useTransform(scrollYProgress, [0, .5], [1, -50]);


  return (
    <m.div style={{ opacity:trans, y:y }}>{children}</m.div>
  )
}

export default Scroll1