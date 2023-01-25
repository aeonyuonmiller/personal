import Link from "next/link"
import { motion as m, AnimatePresence } from "framer-motion"
import ArrowIcon from "./ArrowIcon"

const Thumbnail = ({ title, description, url, src }) => {
    const zoom = {
        hide: { scale: 1.1, transition:{ type:"ease", duration: 8}},
        show: { scale: 1, transition:{ ease:[.79,.41,.07,.99], duration: 1 }}
    }
    
  return (
    <Link href={url ?? ''}>
      <AnimatePresence>
        <m.div layoutId={src} className="thumbnail-container">
        <m.img variants={zoom} initial="hide" whileInView="show" exit="hide" viewport={{ amount: 0.5, once: true }} src={src} />
        <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>{title}</m.h3>
        <m.h5 exit="hide">{description}</m.h5>
        <m.span className="arrow" exit="hide"><ArrowIcon /></m.span>
      </m.div>
      </AnimatePresence>
    </Link>
  )
}

export default Thumbnail