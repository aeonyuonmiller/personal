import React from 'react'
import { motion } from 'framer-motion'

const transition = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Layout = ({children}) => {
  return (
    <motion.div variants={transition} initial="hidden" animate="show" exit="hidden" className="layout">
        {children}
    </motion.div>
  )
}

export default Layout