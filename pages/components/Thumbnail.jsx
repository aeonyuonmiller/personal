import Link from "next/link"
import { motion as m, AnimatePresence } from "framer-motion"
import ArrowIcon from "./ArrowIcon"

const Thumbnail = ({ title = "", description = "", url = "", src = "" }) => {

    const zoom = {
      hide: { scale: 1.15, opacity: null, transition:{ ease:[.79,.41,.07,.99], duration: .6 }},
      show: { scale: 1, opacity:1, transition: { ease: [.79, .41, .07, .99], duration: 1 }}
    }
  
  return (
    <div>
      <AnimatePresence mode="wait">
        {/* <Link prefetch href={url ?? ''}> */}
        <Link tabIndex="0" aria-labelledby={title} prefetch href={url}>
          <m.div variants={zoom} initial="hide" animate="show" exit="hide" className="thumbnail-container">
            <m.img role="presentation" variants={zoom} initial="hide" whileInView="show" viewport={{ amount: 0.5, once: true }} src={src} />
            <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ease: "easeOut", duration: .4}}>{title}</m.h3>
            <h5>{description}</h5>
            <span className="arrow"><ArrowIcon color="var(--bg)" /></span>
          </m.div>
        </Link>
      </AnimatePresence>
    </div>
  )
}

export default Thumbnail