import React from 'react'
import Link from 'next/link'
import Logo from "./Logo"
import Lottie from 'react-lottie';
import animationData from '../../public/white-logo.json';

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

const Nav = () => {
    
    return (
        <nav>
            {/* <Logo color="#fff" width="90" /> */}
            <Lottie options={defaultOptions} width={90} height={34} />
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/work">Work</Link>
            <a href="mailto:aym1@mail.com">Mail</a>
        </nav>
  )
}

export default Nav