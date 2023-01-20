import React from 'react'
import { motion as m } from "framer-motion"
import Link from 'next/link'
// import Image from 'next/image'
import LogoIcon from "./LogoIcon"

// const Logo = () => {
//   return (
//     <m.div drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} className='logo'>
//       <Link href="/">
//       <m.img
//         initial={{ scale: 1.05, opacity: 0, x: -50 }}
//         animate={{ scale: 1, opacity: 1, x: 0, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}}
//         src="/logo.png" width="100%" height="auto"></m.img>
//     </Link>
//     </m.div>
//   )
// }

const Logo = () => {
  return (
    <m.div drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }} className='logo'>
      <Link href="/">
        <LogoIcon/>
      </Link>
    </m.div>
  )
}

export default Logo