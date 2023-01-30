import React from 'react'
import { motion as m, useMotionValue } from "framer-motion"

import ArrowIcon from "./ArrowIcon"

const ScrollDown = () => {
  const scrollY = useMotionValue(0)

  return (
    <m.div initial={{ opacity: 0 }} animate={{ opacity: scrollY.get() > 100 ? 0 : 1, transition: { duration: 1, delay: 2 } }} exit={{ opacity: 0 }}>
      <m.div initial={{ y: 0 }} whileInView={{ y: [0, 10, 0], transition: { repeat: Infinity, duration: 1 } }} className='scroll-down'>
        Scroll
        <ArrowIcon color="var(--tertiary)" />
      </m.div>
    </m.div>
  )
}

export default ScrollDown