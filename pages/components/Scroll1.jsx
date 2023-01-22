import { motion as m, useScroll, useTransform } from "framer-motion"

const Scroll1 = ({children}) => {
    const { scrollYProgress } = useScroll();
    const trans = useTransform(scrollYProgress, [0, .5], [1, -2]);
    const y = useTransform(scrollYProgress, [0, .5], [1, -60]);


  return (
    <m.div style={{ opacity: trans, y: y }}>{children}</m.div>
  )
}

export default Scroll1