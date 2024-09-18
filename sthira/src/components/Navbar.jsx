import React, { useState } from 'react';
import { RiMentalHealthFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    return (
        <header className='fixed w-full z-10 bg-backgroundColor text-lightText py-4'>
            {/*nav section*/}
            <nav className='container flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <RiMentalHealthFill size={40} className='text-backgroundColor2' />
                    <Link to="/Home" className='font-bold text-2xl'>Sthira</Link>
                </div>
                <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
                    <Link to="/Home" className='hover:text-white transition duration-200 ease-linear'>Home</Link >
                    <Link to="/about" className='hover:text-white transition duration-200 ease-linear'>About Us</Link>
                    <Link to="/chat" className='hover:text-white transition duration-200 ease-linear'>Chat</Link>
                    <Link to="/account" className='hover:text-white transition duration-200 ease-linear'>Account</Link>

                    <button className='hidden lg:flex border-2 border-backgroundColor2 text-lg px-4 rounded-md hover:bg-backgroundColor2 transition duration-200 ease-linear hover:text-white'>Emergency</button>
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
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>
                <Link to="/Home" className='hover:text-white transition duration-200 ease-linear'>Home</Link>
                <Link to="/about" className='hover:text-white transition duration-200 ease-linear'>About Us</Link>
                <Link to="/chat" className='hover:text-white transition duration-200 ease-linear'>Chat</Link>
                <Link to="/account" className='hover:text-white transition duration-200 ease-linear'>Account</Link>
                <div>
                    <button className='hover:bg-backgroundColor2 border-2 border-backgroundColor2 py-1 px-4 rounded-md'>Emergency</button>
                </div>


            </div>
        </header>
    );
}

export default Navbar;
