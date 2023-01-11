import React from 'react'
import Link from 'next/link';
import { motion as m } from "framer-motion"

const Nav = ({title, gototitle, url}) => {
    return (
    <nav>
        <Link href={`/${url}`}>
            <m.span>{title}</m.span>
            <m.span exit={{ opacity: 0 }}>{gototitle}</m.span>
        </Link>
    </nav>
  )
}

export default Nav