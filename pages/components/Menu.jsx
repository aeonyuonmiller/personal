import { motion as m } from 'framer-motion'
import Link from 'next/link';

const Menu = () => {
  return (
    <m.div className='menu'>
        <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="mailto:aym1@mail.com">Contact</Link>  
        <Link href="/imprint">Imprint</Link>  
    </m.div>
  )
}

export default Menu