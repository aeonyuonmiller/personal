import Link from "next/link"
import { m } from "framer-motion"
import ArrowIcon from "./ArrowIcon"

const Thumbnail = ({ title = "", description = "", url = "", src = "" }) => {

    const parent = {
      hide: { opacity: null, y: 20, transition:{ ease:[.79,.41,.07,.99], duration: .6 }},
      show: { opacity:1, y: 0, transition: { ease: [.79, .41, .07, .99], duration: 1 }}
    }

    const zoom = {
      hide: { scale: 1.15, opacity: null, transition:{ ease:[.79,.41,.07,.99], duration: .6 }},
      show: { scale: 1, opacity:1, transition: { ease: [.79, .41, .07, .99], duration: 1 }}
    }
  
  return (
    <div>
        {/* <Link prefetch href={url ?? ''}> */}
          <m.div variants={parent} initial="hide" animate="show" exit="hide" className="thumbnail-container">
            <Link tabIndex="1" aria-labelledby={title} prefetch href={url}>
              <m.img loading="lazy" variants={zoom} initial="hide" whileInView="show" viewport={{ amount: 0.5, once: false }} src={src} />
              <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ease: "easeOut", duration: .4}}>{title}</m.h3>
              <h5>{description}</h5>
              <span className="arrow"><ArrowIcon color="var(--bg)" /></span>
            </Link>
          </m.div>
    </div>
  )
}

export default Thumbnail