import React from 'react'
import { motion as m } from "framer-motion"

import ArrowIcon from "./ArrowIcon"

const ScrollDown = () => {
  return (
      <m.div initial={{ y: null }} animate={{ y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } }} className='scroll-down'>
        <ArrowIcon />
      </m.div>
  )
}

export default ScrollDown