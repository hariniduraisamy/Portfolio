import React from 'react'
import { FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'



const Links = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'> 
      <ul>
        <li className='flex justify-between items-center w-40 px-3  bg-gray-300 rounded-tr-md  h-12 ml-[-108px] hover:ml-[-5px] duration-300 hover:rounded-md'>
            <a href="https://www.linkedin.com/in/harini-duraisamy-b14947250/" className='flex justify-between items-center w-full'target='_blank'rel='noreferrer' >
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='flex justify-between items-center w-40 px-3  bg-gray-300 h-12 ml-[-108px] hover:ml-[-5px] duration-300 hover:rounded-md'>
            <a href="https://github.com/hariniduraisamy" className='flex justify-between items-center w-full'target='_blank'rel=' noreferrer' >
                GitHub <FaGithub size={30}/>
            </a>
        </li>
        <li className='flex justify-between items-center w-40 px-3  bg-gray-300  h-12 ml-[-108px] hover:ml-[-5px] duration-300 hover:rounded-md'>
            <a href="https://x.com/HariniDuraisamy" className='flex justify-between items-center w-full' target='_blank'rel='noreferrer' >
                Twitter<FaTwitter size={30}/>
            </a>
        </li>
        <li className='flex justify-between items-center w-40 px-3  bg-gray-300 h-12 ml-[-108px] rounded-br-md hover:ml-[-5px] duration-300 hover:rounded-md'>
            <a href="mailto:harinidurai334@gmail.com" className='flex justify-between items-center w-full'>
                Mail<HiOutlineMail size={30}/>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default Links
