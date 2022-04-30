import React from 'react'

const CloseButton = ({children}) => {
  return (
    <button className='close' tabIndex="0"><strong>&#10005;</strong><span>{children}</span></button>
  )
}

export default CloseButton