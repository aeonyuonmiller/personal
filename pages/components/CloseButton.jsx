import { motion } from 'framer-motion'

const variants = {
  intro: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 }
}

const CloseButton = ({children}) => {
  return (
    <motion.div variants={variants} initial="intro" animate="animate" exit="intro">
      <button className='close' tabIndex="0"><strong>&#10005;</strong><span>{children}</span></button>
    </motion.div>
  )
}

export default CloseButton