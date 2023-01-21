import { motion as m } from "framer-motion"
import Link from 'next/link'
import LogoIcon from "./LogoIcon"

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