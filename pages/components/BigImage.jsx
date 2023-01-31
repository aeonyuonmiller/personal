import { motion as m } from "framer-motion"

const BigImage = ({src = "", alt = "", marginBottom = ""}) => {
  return (
    
    <div style={{marginBottom}}>
        <img src={src} alt={alt}/>
          
        <style jsx>{`
          div {
            position: relative;
            grid-column: 1 / 4;
            height: auto;
          }
          div img{ width: 100%; }
      `}</style>
      </div>
  )
}

export default BigImage