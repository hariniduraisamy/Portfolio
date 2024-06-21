import React from 'react'
import pharma from '../assets/pharma.jfif'
import transport from '../assets/transport.jpeg'
import craft from '../assets/craft.jpg'


const Portfolio = () => {
  return (
    <div name="Portfolio" className='w-full  bg-gradient-to-b from-black to-gray-800  text-white md:h-screen'>
      

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl inline font-bold border-b-4 border-gray-500 cursor-pointer hover:text-cyan-500'>
                Portfolio
            </p>
            <p className='py-6'>
                Check out some of my works right here!
            </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:p-0 '>
            <div className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300'>
                <img src={transport} alt="" className='w-full rounded-md h-29' />
                <div className='flex flex-col items-center'>
      <p className='p-4 h-full '>
      <span><p className='text-3xl text-bold py-2 text-cyan-500'> Transport Management App</p></span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet soluta animi expedita! Voluptate, ea! Quod
         cum, optio officia deserunt tempore incidunt! Quasi ab, quis aperiam sapiente modi inventore iure?
      </p>
      <button className='w-1/3 px-6 py-3 rounded-md m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        Code
      </button>
    </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300 '>
                <img src={craft} alt="" className='w-full rounded-md' />
                <div className='flex flex-col items-center'>
      <p className='p-4 h-full'>
        <span><p className='text-3xl text-bold py-2 text-cyan-500'> Craft Home</p></span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam consectetur optio tenetur neque consequatur unde
         laborum dolorum aliquam veritatis voluptates sint reiciendis omnis soluta, at debitis odio id facere!</p>
      <button className='w-1/3 px-6 py-3 rounded-md m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        Code
      </button>
    </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300 '>
                <img src={pharma} alt="" className='w-full rounded-md' />
                <div className='flex flex-col items-center'>
      <p className='p-4 h-full'>
      <span><p className='text-3xl text-bold py-2 text-cyan-500'> Pharmeasy</p></span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam doloremque eaque? Nihil nisi fugit ullam deserunt amet et perferendis,
         animi ducimus vitae numquam earum eum voluptatem inventore. Itaque, placeat.</p>
      <button className='w-1/3 px-6 py-3 rounded-md m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
        Code
      </button>
    </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
