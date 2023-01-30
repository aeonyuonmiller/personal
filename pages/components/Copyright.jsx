import React from 'react'
import Link from 'next/link';

const Copyright = () => {
  return (
    <div className="copyright">
      <span>&copy;</span> {new Date().getFullYear()}
      <Link tabIndex={4} href="/imprint">Imprint</Link>
      <Link tabIndex={3} href="/about">About</Link>
    </div>
  )
}

export default Copyright