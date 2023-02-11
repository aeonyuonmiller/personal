import { m, useScroll, useSpring } from "framer-motion"
import Image from "next/image"

const BigImage = ({ src = "", alt = "", marginBottom = "" }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  return (
  
    <div className="image-container" style={{ marginBottom }}>
      <m.span style={{ scaleX }} initial={{ opacity:0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><Image fill={true} src={src} alt={alt} /></m.span>
          
      <style jsx>{`
        .image-container {
          position: relative;
          grid-column: 1 / 4;
          width: 100%;
          min-height: 50vh;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .image-container img{ 
          position: relative;
          width: 100%;
          object-fit: cover;
        }
      `}</style>

    </div>
  )
}

export default BigImage