import Link from 'next/link';
import { motion as m } from "framer-motion"

const Nav = ({ title, gototitle, url }) => {

    return (
    <m.nav initial={{opacity:0}} animate={{opacity:1}}>
        <Link href={`/${url}`}>
            <m.span>{title}</m.span>
            <m.span exit={{ opacity: 0, transition:{ duration: .6 }}}>{gototitle}</m.span>
        </Link>
    </m.nav>
  )
}

export default Nav