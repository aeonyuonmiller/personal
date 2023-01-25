import { motion as m, AnimatePresence } from 'framer-motion'
import Link from 'next/link';

const Menu = ({ isModal, setModal }) => {
  return (
    <AnimatePresence>
      {isModal && (
        <m.div className='menu'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="mailto:aym1@mail.com">Contact</Link>
          <Link href="/imprint">Imprint</Link>
          <a onClick={() => setModal(false)}>Close</a>
        </m.div>
      )}
    </AnimatePresence>
  )
}

export default Menu