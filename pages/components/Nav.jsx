import React from 'react'
import Link from 'next/link'
// import Logo from "./Logo"
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import animationData from '../../public/LOGO.json';

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const container = {
        show: {
            transition: { staggerChildren: 0.1, delayChildren: 1.6, }
        }    
    };

    const items = {
        intro: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "ease", duration: 0.2 }},
    };

const Nav = () => {
    
    return (
        <motion.nav variants={container} initial="intro" animate="show">
            {/* <Logo color="#fff" width="90" /> */}
            <Lottie options={defaultOptions} width={90} height={34} />
            <Link href="/" scroll={false}><a className="go-home" tabIndex="0" /></Link>
            <motion.span variants={items}><Link href="/work" tabIndex="0" scroll={false}>Work</Link></motion.span>
            <motion.span variants={items}><Link href="/info" tabIndex="0" scroll={false}>Info</Link></motion.span>
            <motion.span variants={items}><a href="mailto:aym1@mail.com" data-splitbee-event="email" tabIndex="0">Mail</a></motion.span>
        </motion.nav>
  )
}

export default Nav