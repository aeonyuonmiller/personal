import Link from 'next/link'
import { motion as m } from "framer-motion"
import LogoIcon from "./LogoIcon"

const Logo = () => {
  return (
    <m.div whileHover={{scale:1.03}} whileTap={{x:-10}} className='logo'>
      <Link tabIndex={0} href="/">
        <LogoIcon/>
      </Link>

        {/* <svg className='distort'>
        <defs>  
          <filter id="distort">
            <feTurbulence id="turbulence" stitchTiles="noStitch" baseFrequency="0.025" numOctaves="2" seed="0" />
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="turbulence" scale="50" />
          </filter>
        </defs>
      </svg> */}

    </m.div>
  )
}

export default Logo