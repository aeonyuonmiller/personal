import React from 'react'
import { motion } from 'framer-motion'

const transition = {
  intro: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition:{ ease: "easeOut", duration: 0.3 }},
  exit: { opacity: 0, y: -30, transition:{ ease: "easeIn", duration: 0.4 }}
}

const Layout = ({children}) => {
  return (
    <motion.div className="layout" variants={transition} initial="intro" animate="show" exit="exit">
        {children}
    </motion.div>
  )
}

export default Layout