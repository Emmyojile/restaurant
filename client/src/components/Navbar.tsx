import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 text-grey p-4 flex items-center justify-between border-b-2 border-b-blue-700 uppercase'>
      {/* LOGO */}
      <div className='text-xl'>
        <Link href="/">
          WESTERN-EATERY
        </Link>
      </div>
      {/* MOBILE MENU */}
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar