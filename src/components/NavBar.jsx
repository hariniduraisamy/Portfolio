import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from "react-scroll"
import { useState } from 'react';

const NavBar = () => {
  const [nav, setNav]=useState(false)
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-6 py-5'>
      <div>
        <h1 className='text-5xl font-signature'>Harini Duraisamy</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='px-5 text-gray-500 capitalize hover:scale-150 duration-200 cursor-pointer'><Link to="Home" smooth duration={500} >Home</Link></li>
        <li className='px-5 text-gray-500 capitalize hover:scale-150 duration-200 cursor-pointer'><Link to="About" smooth duration={500} >About</Link></li>
        <li className='px-5 text-gray-500 capitalize hover:scale-150 duration-200 cursor-pointer'><Link to="Portfolio" smooth duration={500} >Portfolio</Link></li>
        <li className='px-5 text-gray-500 capitalize hover:scale-150 duration-200 cursor-pointer'><Link to="Exp" smooth duration={500} >Technologies</Link></li>
        <li className='px-5 text-gray-500 capitalize hover:scale-150 duration-200 cursor-pointer'><Link to="Contact" smooth duration={500} >Contact</Link></li>
      </ul>
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        
        {nav ? <FaTimes size={30}/> :<FaBars size={30}/>}
      </div>
      {
        nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <li className='py-6 text-gray-500 capitalize text-4xl  cursor-pointer'><Link to="Home" onClick={()=>setNav(!nav)} smooth duration={500} >Home</Link></li>
        <li className='py-6 text-gray-500 capitalize text-4xl cursor-pointer'><Link to="About" onClick={()=>setNav(!nav)} smooth duration={500} >About</Link></li>
        <li className='py-6 text-gray-500 capitalize text-4xl cursor-pointer'><Link to="Portfolio" onClick={()=>setNav(!nav)} smooth duration={500} >Portfolio</Link></li>
        <li className='py-6 text-gray-500 capitalize text-4xl cursor-pointer'><Link to="Exp" onClick={()=>setNav(!nav)} smooth duration={500} >Technologies</Link></li>
        <li className='py-6 text-gray-500 capitalize text-4xl cursor-pointer'><Link to="Contact" onClick={()=>setNav(!nav)} smooth duration={500} >Contact</Link></li>
      </ul>

          
        )
      }
      
    </div>
  );
};

export default NavBar;
