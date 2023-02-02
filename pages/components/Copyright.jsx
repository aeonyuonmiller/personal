import { motion as m } from "framer-motion"
import Link from 'next/link';
import ArrowIconPath from "../components/ArrowIconPath"

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
      <m.span className="move" variants={child}><Link tabIndex={5} href="/imprint">Imprint</Link></m.span>
      <m.span className="move" variants={child}><Link tabIndex={3} href="/about">About</Link></m.span>
      <m.span variants={child}><a target="_blank" rel="noreferrer" tabIndex={4} href="https://www.linkedin.com/in/andreas-y-m%C3%BCller/">Linkedin<ArrowIconPath/></a></m.span>
    </m.div>
  )
}

export default Copyright