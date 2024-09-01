import React from 'react'
import { faqs } from './../../assets/data/faqs'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <div id='faq'>
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <h1 className='text-4xl md:text-6xl   pt-10 px-20 text-center font-semibold '>
            Let's get all 
            your questions answered, shall we?
            </h1>
        </div>
    <ul className='mt-10'>
        {faqs.map((item, index) =>(
            <FaqItem item={item} key={index}/> 
        ))}
    </ul>
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <h1 className='text-3xl md:text-4xl pt-10 px-10 text-center font-semibold '>
            Let's have a virtual cup of coffee & talk about taking your business to the next level with a website that drives you sales.
            </h1>
            <div className='flex justify-center mt-10'>
            <a href="https://wa.me/233207333553">
            <button className="relative inline-flex items-center justify-center p-2.5 border-4 border-transparent rounded-2xl bg-gradient-to-r from-purple-200 to-purple-200 text-white text-sm font-medium hover:bg-transparent hover:border-white focus:outline-none">
      <span className="absolute inset-0 rounded-xl border border-white animate-border-light bg-gradient-to-r from-violet-500 via-purple-300 to-purple-500" />
      <span className="relative z-10">Book A Call Now</span>
    </button>
    </a>
            </div>
        </div>
    </div>
  )
}

export default FaqList