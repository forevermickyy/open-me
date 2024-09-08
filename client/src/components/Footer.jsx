import React from 'react'
import { Typography } from "@material-tailwind/react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-purple-300 via-transparent to-purple-50 mt-10 p-8">
        
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-purple-50 text-center md:justify-center">
      <img src="logoooo.png" className="w-20" />
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          
        </li>
        <li>
          <Typography
            as="a"
            href="https://twitter.com/coldmickyy"
            color="blue-gray"
            className=" hover:text-blue-500 "
          >
           <FaXTwitter />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://t.me/coldmickyy"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
           <FaTelegramPlane />
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="https://wa.me/233207333553"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <FaWhatsapp />
          </Typography>
        </li>
        
      </ul>
    </div>
    <hr className="my-8 border-blue-gray-50" />
    <Typography color="blue-gray" className="text-center font-normal">
      &copy; 2022 MickyyDevs
    </Typography>
  </footer>
  );
}

export default Footer