import React from 'react'
import Link from 'next/link';

const Copyright = () => {
  return (
      <div className="copyright">
        <span>&copy;</span> 2023
        <Link href="/imprint">Imprint</Link>
      </div>
  )
}

export default Copyright