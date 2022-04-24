import React from 'react'
import { motion } from 'framer-motion'

const transition = {
  intro: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition:{ type: "tween", duration: 0.2 }},
  exit: { opacity: 0, y: -30, transition:{ ease: "easeIn", duration: 0.5 }}
}

const Layout = ({children}) => {
  return (
    <motion.div variants={transition} initial="intro" animate="show" exit="exit" className="layout">
        {children}
    </motion.div>
  )
}

export default Layout