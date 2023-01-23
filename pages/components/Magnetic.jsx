import React, { useState, useEffect } from 'react'
import { motion as m, useMotionValue, useTransform } from 'framer-motion'

const Magnetic = ({children}) => {
  const [isProximity, setIsProximity] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const proximityX = useTransform(x, [-100, 100], [-50, 50])
  const proximityY = useTransform(y, [-100, 100], [-50, 50])

  useEffect(() => {
    if (isProximity) {
      const handleMouseMove = (event) => {
        x.set(event.clientX - window.innerWidth / 2)
        y.set(event.clientY - window.innerHeight / 2)
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [isProximity, x, y])

  return (
    <m.div
      onMouseEnter={() => setIsProximity(true)}
      onMouseLeave={() => setIsProximity(false)}
      animate={{
        x: isProximity ? proximityX : 0,
        y: isProximity ? proximityY : 0
      }}
      transition={{ duration: 0.3 }}
    >{children}</m.div>
  )
}

export default Magnetic
