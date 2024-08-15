import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiMentalHealthFill } from "react-icons/ri";
import Button from '../layouts/Button';
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className='fixed w-full'>
      <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
        <div className='flex flex-row items-center cursor-pointer'>
          <RiMentalHealthFill size={32} />
          <h1 className='text-xl font-semibold ml-2'>Sthira</h1>
        </div>
        <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className='text-lightText hover:text-brightColor2 transition-all cursor-pointer'>
            Home
          </Link>
          <div className='relative group'>
            <div className='flex items-center gap-1'>
              <Link
                to="peer"
                spy={true}
                smooth={true}
                duration={500}
                className='text-lightText hover:text-brightColor2 transition-all cursor-pointer'>
                Peer Communities
              </Link>
            </div>
            <ul className='absolute hidden space-y-2 group-hover:block bg-backgroundColor border border-gray-300 rounded-lg p-5'>
              <li>
                <Link
                  to="peer"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='text-lightText hover:text-brightColor transition-all cursor-pointer'>
                  Working Professionals
                </Link>
              </li>
              <li>
                <Link
                  to="peer"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='text-lightText hover:text-brightColor transition-all cursor-pointer'>
                  Postpartum Mothers
                </Link>
              </li>
              <li>
                <Link
                  to="peer"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className='text-lightText hover:text-brightColor transition-all cursor-pointer'>
                  Students
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=' text-lightText hover:text-brightColor transition-all cursor-pointer'>
            About
          </Link>
          <Link
            to="AI"
            spy={true}
            smooth={true}
            duration={500}
            className='text-lightText hover:text-brightColor transition-all cursor-pointer'>
            AI Help
          </Link>
          <Link
            to="account"
            spy={true}
            smooth={true}
            duration={500}
            className='text-lightText hover:text-brightColor transition-all cursor-pointer'>
            My Account
          </Link>
          <Button title="Emergency" />
        </nav>
        <div className='md:hidden flex items-center'>
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      {menu && (
        <div className='lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300'>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className='hover:text-brightColor transition-all cursor-pointer'
            onClick={closeMenu}>
            Home
          </Link>
          <Link
            to="peer"
            spy={true}
            smooth={true}
            duration={500}
            className='hover:text-brightColor transition-all cursor-pointer'
            onClick={closeMenu}>
            Peer Communities
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className='hover:text-brightColor transition-all cursor-pointer'
            onClick={closeMenu}>
            About
          </Link>
          <Link
            to="AI"
            spy={true}
            smooth={true}
            duration={500}
            className='hover:text-brightColor transition-all cursor-pointer'
            onClick={closeMenu}>
            AI Help
          </Link>
          <Link
            to="account"
            spy={true}
            smooth={true}
            duration={500}
            className='hover:text-brightColor transition-all cursor-pointer'
            onClick={closeMenu}>
            My Account
          </Link>
          <Button title="login" />
        </div>
      )}
    </div>
  );
};

export default Nav;
