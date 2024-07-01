import React from 'react'
import Product4 from '../assets/Product4.png'
import Product5 from '../assets/Product5.png'
import Product6 from '../assets/Product6.png'
import { motion } from "framer-motion"
const NewArrivals = () => {
  return (
    <div className='fadeanimation'>
    <motion.div className="animate-div"  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale:1 }} />
      <div className="w-[96%] m-auto shadow-fuchsia-800 shadow-md flex flex-col my-6 bg-gradient-to-r from-black to-[#8F0060]">
        <div className="text-3xl font-against pt-4 text-white mx-auto">NEW ARRIVALS</div>   
        <div className="my-8 grid justify-items-center min-[1020px]:grid-cols-3 min-[680px]:grid-cols-2 grid-cols-1 min-[1180px]:w-full min-[1180px]:justify-evenly mx-auto">
          <div className="border-4 border-bg-pink rounded-t-full w-[320px] mx-8 bg-white mt-4 hover:scale-105"
          style={{ transition: "all 0.4s ease-in-out" }}>
            <div className="p-5 pt-20 flex justify-center">
              <img
                src={Product4}
                alt="Product2"
                className="h-[280px]"
              />
            </div>
            <div className="font-lexend text-xl pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">Purely Majestic</p>
              <div className="flex justify-between text-base mt-2">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="border-4 border-bg-pink rounded-t-full w-[320px] mx-8 bg-white mt-4 hover:scale-105"
          style={{ transition: "all 0.4s ease-in-out" }}>
            <div className="p-5 pt-20 flex justify-center">
              <img
                src={Product5}
                alt="Product1"
                className="h-[280px]"
              />
            </div>
            <div className="font-lexend text-xl pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">You are the swagger</p>
              <div className="flex justify-between text-base mt-2">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="border-4 max-[1020px]:min-[680px]:col-span-2 border-bg-pink rounded-t-full w-[320px] mx-8 mt-4 bg-white hover:scale-105"
          style={{ transition: "all 0.4s ease-in-out" }}>
            <div className="p-5 pt-20 flex justify-center">
              <img
                src={Product6}
                alt="Product3"
                className="h-[280px]"
              />
            </div>
            <div className="font-lexend text-xl pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">Peace Within</p>
              <div className="flex justify-between text-base mt-2">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default NewArrivals
