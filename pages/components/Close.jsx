import React from 'react'
import { m } from "framer-motion"
import Link from 'next/link'
import CloseIcon from "./CloseIcon"

const Close = () => {
    return (
        <Link href="/" scroll={false}>
            <m.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0, transition: { type: "spring", duration: .6 }}}
                whileHover={{ scale: .8, rotate: 90, transition: { type: "spring", duration: .2 }}}
                exit={{ scale: 0, rotate: 225, y: -50, transition: { duration: .6, delay: .2 }}}
                className='close'
            >
                <CloseIcon />
            </m.div>
        </Link>
      )
}

export default Close