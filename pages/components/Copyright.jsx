import React from 'react'
import Link from 'next/link';

const Copyright = () => {
  return (
    <div className="copyright">
      <span>&copy;</span> {new Date().getFullYear()}
      <Link href="/imprint">Imprint</Link>
      <Link href="/about">About</Link>
    </div>
  )
}

export default Copyright