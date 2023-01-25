import Link from 'next/link'
import { motion as m, AnimatePresence } from "framer-motion"
import ArrowIcon from "./ArrowIcon"

const Thumbnail = ({ title, description, url, src }) => {
    const zoom = {
        hide: { scale: 1.3, rotateX: 15, transition:{ ease:[.64, .62, .23, .99], duration: 5, delay: 5 }},
        show: { scale: 1, rotateX: 0, transition:{ ease:[.79,.41,.07,.99], duration: 5 }}
    }
    
  return (
    <Link href={url}>
      <AnimatePresence>
        <m.div layoutId={src} className="thumbnail-container">
        <m.img variants={zoom} initial="hide" whileInView="show" exit="hide" viewport={{ amount: 0.5 }} src={src} />
        <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>{title}</m.h3>
        <h5>{description}</h5>
        <span className="arrow"><ArrowIcon /></span>
      </m.div>
      </AnimatePresence>
    </Link>
  )
}

export default Thumbnail