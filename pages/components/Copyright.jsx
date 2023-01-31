import { motion as m } from "framer-motion"
import Link from 'next/link';

const Copyright = () => {
  const parent = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition:{ duration: .6, staggerChildren: .4 }}
  }

  const child = {
    initial: { opacity:0, y:10 },
    animate: { opacity:1, y:0, transition:{ ease: "easeOut", duration: .6 }}
  }
  return (
    <m.div variants={parent} initial="initial" animate="animate" className="copyright">
      <m.span variants={child}>&copy;&nbsp;</m.span>
      <m.span>{new Date().getFullYear()}</m.span>
      <m.div variants={child}><Link tabIndex={5} href="/imprint">Imprint</Link></m.div>
      <m.div variants={child}><Link tabIndex={4} href="#">Linkedin</Link></m.div>
      <m.div variants={child}><Link tabIndex={3} href="/about">About</Link></m.div>
    </m.div>
  )
}

export default Copyright