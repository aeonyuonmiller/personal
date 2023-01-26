import { motion as m } from "framer-motion"

const Connect = () => {
  const group = {
    hide: { opacity: 0, transition:{ staggerChildren: 0.3, } },
    show: { opacity: 1, transition:{ staggerChildren: 0.3, }}
  }

  const item = {
    hide: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}
  }
  
  return (
    <a href="mailto:aym1@mail.com">
    <m.div
      // drag
      // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      whileHover={{ scale: 1.05 }}
      className='connect'
    >
        <m.div variants={group} initial="hide" animate="show" className='dots'>
        <m.div className='dot' />
        <m.div className='dot' />
        <m.div className='dot' />
      </m.div>
      <span className='description'>Hello</span>
      </m.div>
    </a>
  )
}

export default Connect