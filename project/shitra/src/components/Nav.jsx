import React, { useState } from 'react'
import { RiMentalHealthFill, RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className='fixed w-full z-10 bg-backgroundColor text-lightText p-6 '>
      <nav className='container flex justify-between'>
        <div className='flex items-center gap-2'>
          <RiMentalHealthFill size={32} className='text-backgroundColor2 ' />
          <a href="/" className='font-bold text-2xl'>Sthira</a>
        </div>
        <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>About Us</a>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>Peer Communities</a>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>Podcasts</a>
          <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>My Account</a>

          <button className='hidden lg:flex border-2 border-backgroundColor2 text-lg px-4 rounded-lg hover:bg-backgroundColor2 hover:text-white transition duration-200 ease-linear'>Emergency</button>
        </div>

        <div className='md:hidden flex items-center'>
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/*responsive*/}

      <div className={`${
        menu ? "translate-x-0 " : "-translate-x-full"
      } md:hidden flex flex-col absolute bg-backgroundColor text-lightText left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>

        <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>About Us</a>
        <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>Peer Communities</a>
        <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>Podcasts</a>
        <a href="/" className='hover:text-fuchsia-900 transition duration-200 ease-linear'>My Account</a>

        <button className='border-2 border-backgroundColor2 text-lg px-4 rounded-lg hover:bg-backgroundColor2 hover:text-white transition duration-200 ease-linear'>Emergency</button>
      </div>

    </header>
  )
}

export default Nav
