import React from 'react'
import Link from 'next/link'
// import Logo from "./Logo"
import Lottie from 'react-lottie';
import animationData from '../../public/white-logo.json';
import { motion } from "framer-motion";

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const items = {
        intro: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.2 }},
    };

const Nav = () => {
    
    return (
        <nav>
            {/* <Logo color="#fff" width="90" /> */}
            <Lottie options={defaultOptions} width={90} height={34} />
            <motion.span variants={items} initial="intro" animate="show"><Link href="/">Home</Link></motion.span>
            <motion.span variants={items} initial="intro" animate="show"><Link href="/about">About</Link></motion.span>
            <motion.span variants={items} initial="intro" animate="show"><Link href="/work">Work</Link></motion.span>
            <motion.span variants={items} initial="intro" animate="show"><a href="mailto:aym1@mail.com">Mail</a></motion.span>
        </nav>
  )
}

export default Nav