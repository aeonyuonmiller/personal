import { m } from "framer-motion"
import Image from "next/image"

const BigImage = ({ src = "", alt = "", marginBottom = "" }) => {
  // const { scrollYProgress } = useScroll()
  // const scaleX = useSpring(scrollYProgress)

  return (
  
    <div className="image-container" style={{ marginBottom }}>
      <m.span initial={{ scale: 1.05 }} whileInView={{ scale:1 }}>
        <Image width={1600} height={700} quality={90} src={src} alt={alt} />
      </m.span>
          
      <style jsx>{`
        .image-container {
          position: relative;
          grid-column: 1 / 4;
          width: 100%;
          /* min-height: 50vh; */
          height: auto;
          /* aspect-ratio: 16 / 9; */
          overflow: hidden;
          object-fit: contain;
        }
        .image-container span{
          width: 100%;
        }
        .image-container img{ 
          position: absolute;
          width: auto;
          height: 100%;
        }
      `}</style>

    </div>
  )
}

export default BigImage