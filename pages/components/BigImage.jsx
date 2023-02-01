// import { motion as m } from "framer-motion"
import Image from "next/image"

const BigImage = ({src = "", alt = "", marginBottom = ""}) => {
  return (
    
    <div className="image-container" style={{marginBottom}}>
      <Image fill={true} className="image" src={src} alt={alt} />
          
      <style jsx>{`
        .image-container {
          position: relative;
          grid-column: 1 / 4;
          height: 100vh;
          aspect-ratio: 16 / 9;
        }
        .image{ 
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}

export default BigImage