import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='bg-blue-800 h-16 flex justify-between items-center text-2xl text-white p-4'>
      This is Header Component
      <ul className='flex gap-5 mr-8 text-2xl'>
      
      
        <li><Link className='hover:text-cyan-500' href="/">Home</Link></li>
        <li><Link className='hover:text-cyan-500'  href="about">About</Link></li>
        <li><Link className='hover:text-cyan-500' href="service">Service</Link></li>
        <li><Link className='hover:text-cyan-500' href="contact">Contact</Link></li>
        
    </ul>
    </div>
    
    </>
  )
}

export default Header
