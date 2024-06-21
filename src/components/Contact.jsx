import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-[110vh] bg-gradient-to-b from-black to-gray-800 p-6 text-white'>
      
<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 inline border-gray py-3'>
            Contact
        </p>
        <p className='py-8' >
            Submit the form below to get in touch with me!
        </p>
    </div>
    <div className='flex justify-center items-center '>
        <form action="https://getform.io/f/panvrjda" method='post' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent rounded-md border-2 focus:outline-none text-white' />
            <input type="text" name='email' placeholder='Enter Your Name' className='my-4 p-2 bg-transparent rounded-md border-2 focus:outline-none text-white' />
            <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent rounded-md border-2 focus:outline-none text-white'></textarea>     
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center justify-center rounded-md hover:scale-110 duration-300'>Lets talk!</button>
        </form>
    </div>
</div>

    </div>
  )
}

export default Contact
