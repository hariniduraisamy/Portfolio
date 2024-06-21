import React from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>


        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 text-white md:flex-row h-full'>
            <div className='flex justify-center flex-col h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold'>
                    I'm a Developer!
                </h2>
                <p className='text-gray-500 py-7 max-w-md '>
                    blah blah blah
                    blah blah blah
                    blah blah blah
                    blah blah blah   
                </p>
                <div className='flex justify-center items-center'>
  <div className='mr-10'>
    <Link to="Portfolio" smooth duration={500} className='group flex items-center px-6 py-4 rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-md hover:' >
      Portfolio <span className='group-hover:rotate-90 duration-300 '><IoIosArrowForward size={30}/></span>
    </Link>
  </div>
  <div>
    <a href="/Resume.pdf" download="Resume.pdf">
      <button className='flex items-center px-6 py-4 rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-md hover:scale-105 duration-300'>
        Resume <LuDownload size={30} className='px-1' />
      </button>
    </a>
  </div>
</div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Home
