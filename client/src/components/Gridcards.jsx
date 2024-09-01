import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";

const Gridcards = () => {
  return (
    <div className='bg-gradient-to-b from-violet-950 via-transparent to-violet-950'>
      <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <h1 className='text-4xl text-white md:text-6xl pt-10 px-10 text-center font-semibold '>
            We hate wasting your time because we know how annoying it is.
            </h1>
            <p className='md:text-2xl text-center text-white mb-10 lg:px-20 md:px-10 mt-10'>You are an entrepreneur. You are extremely busy. This stupid simple 

<span className='font-bold'> 3-step process</span> gets your vision to website in as little as 7 days.</p>
        </div>
        <div className="box mx-20 p-4 bg-gradient-to-b from-violet-700 via-transparent to-white  rounded-lg flex items-center">
      <div className="w-1/2 text-content gap-5 ">
        <div>
      <BiPhoneCall className="w-full text-white h-20 "/></div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Step 1: You Book A Quick Call</h2>
        <p className="text-gray-700">We begin with a conversation. We analyze your site and explore how we can help you start converting more</p>
      </div>
      <div className="w-1/2 image-content flex-grow flex-shrink-0">
      <img 
          src="cal.png" // Path relative to the public folder
          alt="Example Image" 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>
    </div>
    <div className="flex flex-wrap gap-4 px-20 py-10">
      <div className="flex-1 bg-gradient-to-t from-violet-700 via-transparent to-white text-white p-6 md:p-8 rounded-lg shadow-md">
      <MdOutlineYoutubeSearchedFor className="w-full text-purple-900 h-20 object-cover" />
        <h2 className="text-xl font-bold">Step 2: We Start Researching</h2>
        <p>We go deep down the rabbit hole. We look at your competitors. We look at your ideal target audience. We learn about their desires and problems.</p>
      </div>
      <div className="flex-1 bg-gradient-to-t from-violet-700 via-transparent to-white text-white p-6 md:p-8 rounded-lg shadow-md">
      <AiOutlineAntDesign className="w-full text-purple-900 h-20 object-cover" />
        <h2 className="text-xl font-bold">Step 3: We Design & Develop</h2>
        <p>We use our "High-Conversion Framework" to start building your landing page. This is where all the insanely fun magic happens</p>
      </div>
    </div>
    </div>
  );
}

export default Gridcards;
