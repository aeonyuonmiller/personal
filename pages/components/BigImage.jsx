// import { motion as m } from "framer-motion"
import Image from "next/image"

const BigImage = ({src = "", alt = "", marginBottom = ""}) => {
  return (
  
    <div className="image-container" style={{ marginBottom }}>
        <Image fill={true} src={src} alt={alt} />
          
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