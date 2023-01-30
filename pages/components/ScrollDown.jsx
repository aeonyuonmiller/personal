import React from 'react'
import { motion as m } from "framer-motion"

import ArrowIcon from "./ArrowIcon"

const ScrollDown = () => {
  return (
    <m.div initial={{ opacity:0 }} animate={{opacity:1, transition:{duration: 1, delay:2}}} exit={{opacity:0}}>
      <m.div initial={{ y: 0 }} whileInView={{ y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } }} className='scroll-down'>
        Scroll
        <ArrowIcon />
      </m.div>
    </m.div>
  )
}

export default ScrollDown