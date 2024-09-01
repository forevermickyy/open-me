import React from 'react'
import Marquee from "react-fast-marquee";
import {motion} from 'framer-motion'
import { fadeIn } from "../variant/fadeIn";

const Slide = () => {
  return (
    <div id="slide">
      <h2 className='px-10 text-2xl text-white font-semibold mt-5'>Recent works</h2>
    <motion.div variants={fadeIn('down', 0)} whileInView={'show'} viewport={{once:true, amount:0.7}} initial='hidden' 
    className="max-w-full bg-gradient-to-r from-gray-950 via-transparent to-gray-950  border-b-0  sm:px-5 lg:px-0 "
    >
    <div className="relative ">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-950 via-transparent to-violet-950 z-10 rounded-b-[6rem] py-[17.5rem]"></div>
    <Marquee speed={100} className="mt-20">
      <div className="flex justify-center gap-9 relative z-20">
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p1.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p2.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p3.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p4.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p5.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p6.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p7.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p8.jpg"
        />
        <img
          className="h-[30rem] rounded-xl"
          src="./pes/p9.jpg"
        />
      </div>
    </Marquee>
  </div>
    </motion.div>
    </div>
  )
}

export default Slide