import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    intro: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { ease:"easeOut", duration: 2, staggerChildren: 0.3 }},
    exit: { opacity: 0, x: -50, transition: { ease:"easeIn", duration: 0.6 }},
    viewport: {once: true, amount: 0.2}
    
}

const Viewport = ({ children }) => {
  return (
    <motion.div initial="intro"
        whileInView="animate"
        exit="exit"
        viewport="viewport"
        variants={variants}
    >
        {children}
    </motion.div>
  )
}

export default Viewport