import React from 'react'
import { motion as m } from "framer-motion"
import Link from 'next/link'

const Close = () => {
    return (
        <Link href="/">
            <m.div initial={{scale:0}} animate={{scale:1, transition:{duration: .6, delay: .8}}} exit={{scale:0, rotate: 90, y: -50, transition:{duration: .6, delay: .2}}} className='close'>Close</m.div>
        </Link>
      )
}

export default Close