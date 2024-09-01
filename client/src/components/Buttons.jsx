import React from 'react'
import { PiEyesBold } from "react-icons/pi";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { TbEyeDollar } from "react-icons/tb";
import { MdAutoGraph } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TiFlashOutline } from "react-icons/ti";

const Buttons = () => {

  return (
    <div id='button'>
    <div className='bg-white py-20'>
        <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <h1 className='text-4xl md:text-6xl pt-10 px-10 text-center font-semibold '>
            Why are most of your website visitors not turning into paying customers?
            </h1>
            <p className='md:text-2xl text-center lg:px-20 md:px-10 mt-10'>Let me tell you a little secret: Getting people to your website is not the hard part of the process. Converting those curious eyeballs into money is.</p>
        </div>
        <div>
        <div className="max-w-screen-2xl container mx-auto p-4">
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <div className=" p-6 rounded-lg">
        <PiEyesBold className="w-full text-purple-900 h-32 object-cover rounded-t-lg"/> 
          <h2 className="text-2xl text-center md:max-w-80 font-bold mt-4">You Want Your Website 
          To Look Really Sexy</h2>
          <p className="mt-2 text-center text-gray-600">
          Your website is not standing out. Your visitors forget that you even exist. They move on with their life
          </p>
        </div>

        <div className=" p-6 rounded-lg">
        <PiSmileyXEyesFill className="w-full  text-purple-900 h-32 object-cover rounded-t-lg"/> 
          <h2 className="text-2xl text-center font-bold mt-4">Your Visitors Are Just 
          Not Sticking Around</h2>
          <p className="mt-2 text-center text-gray-600">
          There's no clear call-to-action that tells your visitor what to do next so they click off your site
          </p>
        </div>

        <div className=" p-6 rounded-lg">
        <TbEyeDollar className="w-full text-purple-900 h-32 object-cover rounded-t-lg"/> 
          <h2 className="text-2xl text-center font-bold mt-4">You're Not Making The Sales That You Hoped For</h2>
          <p className="mt-2 text-center text-gray-600">
          Your website is not designed for conversions. It's not turning your visitors to customers as it should.
          </p>
        </div>
      </div>
    </div>

    </div>
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <h1 className='text-4xl md:text-6xl pt-10 px-10 text-center font-semibold '>
            Imagine if you could fix this and start getting 2x sales in as little as 7 days?
            </h1>
            <p className=' md:text-2xl text-center lg:px-20 md:px-10 mt-10'>Yessir! You heard that right. This is <b>exactly</b> what the High-Conversion Framework has done for 20+ brands in the last 45 days. Will yours be next?</p>
        </div>
        <div>
            
        <div className="max-w-screen-2xl container mx-auto p-4">
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <div className=" p-6 rounded-lg">
        <MdAutoGraph className="w-full text-purple-900 h-32 object-cover rounded-t-lg"/>
          <h2 className="text-2xl text-center md:max-w-80 font-bold mt-4">Your Website's Made 
          From Scratch Just For You</h2>
          <p className="mt-2 text-center text-gray-600">
          We don't build generic sites. All the design & copy is made with your brand in mind. It's 100% You.
          </p>
        </div>

        <div className=" p-6 rounded-lg">
        <RiVerifiedBadgeFill className="w-full text-purple-900 h-32 object-cover rounded-t-lg"/>
          <h2 className="text-2xl text-center font-bold mt-4">Your Website's Finally Converting Like Crazy</h2>
          <p className="mt-2 text-center text-gray-600">
          We push all the right buttons that convert more visitors to paying customers than ever before.
          </p>
        </div>

        <div className="p-6 rounded-lg">
        <TiFlashOutline className="w-full text-purple-900 h-32 object-cover rounded-t-lg"/>
          <h2 className="text-2xl text-center font-bold mt-4">You're Screaming Past 
          All Your Competitors</h2>
          <p className="mt-2 text-center text-gray-600">
          Your competition did not invest in a landing page designer. You're beating them because you did.
          </p>
        </div>
      </div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Buttons