// import Link from 'next/link';
import { m } from "framer-motion"

const Nav = ({ title }) => {

    return (
    <m.nav>
        {/* <Link href={`/${url}`}> */}
            <m.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: .8, ease: [1, -0.01, 0, .99] } }}
                exit={{ opacity: 0, y: -10, transition: { duration: .2, ease: "linear" } }}>
                {title}
            </m.span>
            {/* <m.span exit={{ opacity: 0, transition: { duration: .6 }}}>{gototitle}</m.span> */}
        {/* </Link> */}
    </m.nav>
  )
}

export default Nav