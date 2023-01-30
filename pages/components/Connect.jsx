import { motion as m } from "framer-motion"

const Connect = () => {
  const enter = {
    hide: { y: 200, rotate: 8 },
    show: { y: 0, rotate: 0, transition: { type: 'spring', damping: 100, mass: 50, delay: .1 }}
  }

  const group = {
    hide: { transition:{ duration: .6, staggerChildren: 0.2 }},
    show: { transition:{ duration: .6, staggerChildren: 0.1 }}
  }

  const item = {
    hide: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}
  }
  
  return (
    <a tabIndex="5" href="mailto:info@aeonyuonmiller.com">
      <m.div
        variants={enter}
        initial="hide"
        animate="show"
        whileHover={{ scale: 1.05 }}
        className='connect'
      >
      <m.div variants={group} initial="hide" animate="show" className='dots'>
        <m.div variants={item} className='dot' />
        <m.div variants={item} className='dot' />
        <m.div variants={item} className='dot' />
      </m.div>
      <span className='description'>Hello</span>
      </m.div>
    </a>
  )
}

export default Connect