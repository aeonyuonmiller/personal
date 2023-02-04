import React, { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'

const Accordion = ({ title = "title" }, { children = "" }) => {
    const [isOpen, setOpen] = useState(false)
  return (
    <AnimatePresence initial={false}>
      <m.div
        layout
        style={{ background: "green", borderRadius: 8, height: isOpen ? "200px" : "100px" }}
        transition={{duration:1}}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        <m.span animate={{ opacity: isOpen ? 0 : 1 }}>{children}</m.span>
      </m.div>
      </AnimatePresence>
  )
}

export default Accordion