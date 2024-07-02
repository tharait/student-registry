import React from 'react'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <nav>
        <Link href="/" className='p-4 border mx-2'>Home</Link>
        <Link href="/students" className='p-4 border mx-2'>Students</Link>
    </nav>
  )
}
