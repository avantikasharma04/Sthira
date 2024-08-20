import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri";

const Nav = () => {
  return (
    <header className='bg-backgroundColor text-lightText p-6 '>
      <nav className='container flex justify-between'>
        <div className='flex items-center gap-2'>
        <RiMentalHealthFill size={32} className='text-backgroundColor2' />
          <a href="/" className='font-bold text-2xl'>Sthira</a>
        </div>
        <div className='flex items-center gap-8 font-medium text-xl'>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>About Us</a>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>Peer Communities</a>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>Podcasts</a>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>My Account</a>

          <button className='flex border-2 border-backgroundColor2 text-lg px-4 rounded-md hover:bg-backgroundColor2 hover:text-white transition duration-200 ease-linear'>Emergency</button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
