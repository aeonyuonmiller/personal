import React from 'react'
import { motion as m } from "framer-motion"
// import Image from 'next/image'

const Logo = () => {
  return (
    <div className='logo'>
      <m.img
        initial={{ scale: 1.05, opacity: 0, x: -50 }}
        animate={{ scale: 1, opacity: 1, x: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}}
        drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} src="/logo.png" width="100%" height="auto"></m.img>
    </div>
  )
}

export default Logo