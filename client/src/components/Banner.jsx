import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className= "px-4 py-32 bg-emerald-900 ma-auto">
      <div className="text-green-100 text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5" >Welcome to Planbok Blog</h1>
        <p className=" lg:w-3/5 mx-auto mb-5" >Guide for Businesses Streamlining Blockchain Services</p>
        <div>
          <Link t0="/" className="font-medium hover:text-green-500 inline-flex items-center py-1 " >Learn more <FaArrowRight className="mt-1 ml-2" /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner