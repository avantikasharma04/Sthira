import React, { useState, useEffect } from 'react';
import { RiMentalHealthFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from '../AuthContext';

const Navbar = () => {
    const { token, logout } = useAuth(); 
    const [isAuthenticated, setIsAuthenticated] = useState(!!token);
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    // Use effect to watch for changes in the token and update isAuthenticated
    useEffect(() => {
        setIsAuthenticated(!!token);
    }, [token]);

    return (
        <header className='fixed w-full z-10 bg-backgroundColor2 text-lightText py-4'>
            <nav className='container flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <RiMentalHealthFill size={40} className='text-backgroundColor' />
                    <Link to="/" className='font-bold text-2xl text-brightColor2'>Sthira</Link>
                </div>
                <div className='hidden md:flex items-center gap-8 font-medium text-xl'>
                    <Link to="/" className='hover:text-hover text-white transition duration-200 ease-linear'>Home</Link>
                    <Link to="/Disorderpage" className='hover:text-hover text-white transition duration-200 ease-linear'>Our Services</Link>
                    <Link to="/community" className='hover:text-hover text-white transition duration-200 ease-linear'>Chats</Link>
                    
                    {isAuthenticated ? (
                        <button onClick={logout} className='hover:text-hover text-white transition duration-200 ease-linear'>Logout</button>
                    ) : (
                        <Link to="/login" className='hover:text-hover text-white transition duration-200 ease-linear'>Login</Link>
                    )}

                    <button className='hidden lg:flex border-2 border-green-600 bg-green-600 text-lg px-4 rounded-md hover:bg-green-900 transition duration-200 ease-linear text-white hover:text-hover'><a href="/Emergencypage">Emergency</a></button>
                </div>
                <div className='md:hidden flex items-center'>
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <RiMenuUnfoldFill size={25} onClick={handleChange} />
                    )}
                </div>
            </nav>
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}>
                <Link to="/" className='hover:text-white transition duration-200 ease-linear'>Home</Link>
                <Link to="/Disorderpage" className='hover:text-white transition duration-200 ease-linear'>About Us</Link>
                <Link to="/community" className='hover:text-white transition duration-200 ease-linear'>Chats</Link>

                {isAuthenticated ? (
                    <button onClick={logout} className='hover:text-white transition duration-200 ease-linear'>Logout</button>
                ) : (
                    <Link to="/login" className='hover:text-white transition duration-200 ease-linear'>Login</Link>
                )}

                <div>
                    <button className='hover:bg-backgroundColor2 border-2 border-backgroundColor2 py-1 px-4 rounded-md'><a href="/Emergencypage">Emergency</a></button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;