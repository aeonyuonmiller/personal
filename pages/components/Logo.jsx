import Link from 'next/link'
import { motion as m } from "framer-motion"
import LogoIcon from "./LogoIcon"

const Logo = () => {
  return (
    <m.div whileHover={{scale:1.03}} whileTap={{x:-10}} className='logo'>
      <Link tabIndex={0} href="/">
        <LogoIcon/>
      </Link>
    </m.div>
  )
}

export default Logo