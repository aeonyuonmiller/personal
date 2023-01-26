import Link from "next/link"
import { motion as m, AnimatePresence } from "framer-motion"
import ArrowIcon from "./ArrowIcon"

const Thumbnail = ({ title, description, url, src }) => {

    const zoom = {
      hide: { scale: 1.1, transition:{ ease:[.79,.41,.07,.99], duration: .5 }},
      show: { scale: 1, transition: { ease: [.79, .41, .07, .99], duration: 1 } }
    }
  
  return (
    <Link prefetch href={url ?? ''}>
      <AnimatePresence>
        <m.div layoutId={src} className="thumbnail-container">
          <m.img role="presentation" variants={zoom} initial="hide" whileInView="show" viewport={{ amount: 0.5, once: true }} src={src} />
          <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} exit="hide">{title}</m.h3>
          <h5>{description}</h5>
          <span className="arrow"><ArrowIcon /></span>
        </m.div>
      </AnimatePresence>
    </Link>
  )
}

export default Thumbnail