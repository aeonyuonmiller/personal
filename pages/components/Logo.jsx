import Link from 'next/link'
import { motion as m } from "framer-motion"
import LogoIcon from "./LogoIcon"

const Logo = () => {
  return (
    <m.div whileHover={{scale:1.03}} whileTap={{scale:.99}} className='logo'>
      <Link href="/">
        <LogoIcon/>
      </Link>
    </m.div>
  )
}

export default Logo