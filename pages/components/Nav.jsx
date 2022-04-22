import React from 'react'
import Link from 'next/link'
import Logo from "./Logo"

const Nav = () => {
    return (
        <>
            <Logo color="#fff" width="90" />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <a href="mailto:aym1@mail.com">Mail</a>
        </>
  )
}

export default Nav