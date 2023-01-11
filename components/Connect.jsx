import React from 'react'
import { motion as m } from "framer-motion"


const Connect = () => {
  return (
    <m.div
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      whileHover={{ scale: 1.05 }}
      className='connect'
    >
      <div className='dots'>
        <m.div whileHover={{ scale:1.5 }} className='dot' />
        <m.div whileHover={{ scale:1.5 }} className='dot' />
        <m.div whileHover={{ scale:1.5 }} className='dot' />
      </div>
      <span className='description'>Hello</span>
    </m.div>
  )
}

export default Connect