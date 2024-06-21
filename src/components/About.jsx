import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div>
            <p className='border-b-2 font-bold inline text-4xl cursor-pointer hover:text-cyan-500'>
                About
            </p>
        </div>
        <p className='py-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quia unde recusandae harum iure natus, 
            ea quos modi perspiciatis doloribus ut aliquid dignissimos corporis aspernatur corrupti repellat fugiat
             ipsam suscipit. Molestias sint perspiciatis distinctio assumenda, tenetur maiores hic architecto illum,
             possimus laboriosam doloribus nihil! Tenetur eos commodi corrupti provident praesentium?
        </p>
        <br />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi id beatae 
            laborum aperiam ea deserunt delectus
             quaerat qui quisquam architecto tenetur illo illum a, doloremque porro natus odit eveniet ipsa.
        </p>
      </div>
    </div>
  )
}

export default About
