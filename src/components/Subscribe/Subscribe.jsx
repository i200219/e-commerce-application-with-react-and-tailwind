import React from 'react'




const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='bg-orange-500 dark:bg-gray-800 text-white rounded-2xl mt-2'
   >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl max-auto'>
        <h1
        className='text-2xl text-center sm:text-left sm:text-4xl
        font-semibold'
        >Get notified about our new products</h1>
        <input  type="text" placeholder="Enter your email" className='w-full p-3 mt-2 rounded-full' />
        </div>
        
      </div>
    </div>
  )
}

export default Subscribe
