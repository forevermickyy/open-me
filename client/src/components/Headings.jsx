import React from 'react'

const Headings = () => {
  return (
    <div>
        <div className=' max-w-screen-2xl container mx-auto xl:px-24 sm:px-2'>
            <h1 className='text-4xl md:text-6xl text-white  pt-10 px-20 text-center font-semibold '>
            We Build Websites That Turn  <span className='font-bold'> Curious Visitors To Happy Paying Customers</span>
            </h1>
            <p className='md:text-2xl text-center text-white lg:px-20 px-5 md:px-10 mt-10'>Using our exclusive High-Conversion Framework, we build you a landing page that converts visitors and drive you more sales, books you more calls and makes you money even when you are sleeping.</p>
        </div>
        <div className='flex justify-center'>
          <div className='mt-10'>
        <button className="relative inline-flex items-center justify-center p-2.5 border-4 border-transparent rounded-2xl bg-gradient-to-r from-purple-200 to-purple-200 text-white text-sm font-medium hover:bg-transparent hover:border-purple-300 focus:outline-none">
      <span className="absolute inset-0 rounded-xl border border-white animate-border-light bg-gradient-to-r from-violet-500 via-purple-300 to-purple-500" />
      <a href="https://wa.me/233207333553"><span className="relative z-10">Book A Call Now</span></a>
    </button>
    </div>
    </div>
    </div>
  )
}

export default Headings