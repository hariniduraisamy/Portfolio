import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import git from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import c from '../assets/c.jpg'
import python from '../assets/python.jpg'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'
import mongo from '../assets/mongo.jfif'
import word from '../assets/wordpress.png'

const Exp = () => {
  return (
    <div name="Exp" className='w-full bg-gradient-to-b from-gray-800 via-black to-black py-10'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-40'>
          <p className='text-4xl p-2 border-b-2 inline font-bold border-gray-500 hover:text-cyan-500 cursor-pointer'>Experience</p>
          <p className='py-10'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 px-12 py-8 sm:px-0'>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-orange-500'>
            <img src={html} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>HTML</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-blue-500'>
            <img src={css} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>CSS</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-yellow-500'>
            <img src={javascript} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>JavaScript</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-sky-500'>
            <img src={react} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>React JS</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-sky-500'>
            <img src={tailwind} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-gray-500'>
            <img src={git} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>GitHub</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-blue-500'>
            <img src={c} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>C</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-gray-500'>
            <img src={python} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>Python</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-gray-500'>
            <img src={java} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>Java</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-gray-500'>
            <img src={mysql} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>MySQL</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-gray-500'>
            <img src={mongo} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>MongoDB</p>
          </div>
          <div className='shadow-md hover:scale-105 duration-300 py-3 rounded-md shadow-gray-500'>
            <img src={word} alt="" className='w-20 h-20 mx-auto' />
            <p className='mt-4'>WordPress</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
