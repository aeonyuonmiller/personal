import { motion as m, useScroll, useTransform, circOut } from "framer-motion"

const Scrollbars = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0, 100], { ease: circOut });

    const variant = {
        hide: { opacity: 0 },
        show: { opacity: 1, transition: { ease: [.3, .62, .23, .99], duration: .8 }},
        exit: { scaleY: 0, transition: { ease: [.3, .62, .23, .99], duration: .8 }}
    }

  return (
      <m.div variants={variant} initial="hide" animate="show" exit="exit" className='scrollbar' style={{ scaleY: scale }} />
  )
}

export default Scrollbars