import React from 'react'

const BigImage = () => {
  return (
    <div className='big'>
          <img src="../../public/img1.png" alt="graphics" />
          
        <style jsx>{`
            .big {
            width: 100%;
            height: 300px;
            background: blue;
            }
      `}</style>
      </div>
  )
}

export default BigImage