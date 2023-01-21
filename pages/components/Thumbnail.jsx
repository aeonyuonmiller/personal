import React from 'react'
import { motion as m } from "framer-motion"
import ArrowIcon from "./ArrowIcon"

const Thumbnail = ({ title, description, motive }) => {
    const zoom = {
        hidden: { scale: 1.3, rotateX: 15, transition:{ type:"ease", duration: .5 }},
        show: { scale: 1, rotateX: 0, transition:{ type:"ease", duration: 1 }}
    }
    
  return (
    <m.div exit={{ opacity: 0 }} className="thumbnail-container">
        <m.img variants={zoom} initial="hidden" whileInView="show" viewport={{ amount: 0.4 }} exit="hidden" src={motive} />
        <m.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>{title}</m.h3>
        <h5>{description}</h5>
        <span className="arrow"><ArrowIcon /></span>
    </m.div>
  )
}

export default Thumbnail