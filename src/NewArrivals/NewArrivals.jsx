import React from "react";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";
import Product6 from "../assets/Product6.png";
import { motion } from "framer-motion";
const NewArrivals = () => {
  return (
    <div className="fadeanimation">
      <motion.div
        className="animate-div"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
      />
      <div className="w-[96%] m-auto mb-10 shadow-fuchsia-800 shadow-md flex flex-col my-6 bg-gradient-to-r from-black to-[#8F0060]">
        <div className="text-3xl font-against pt-4 text-white mx-auto">
          NEW ARRIVALS
        </div>
        <div className="my-8 grid justify-items-center min-[1020px]:grid-cols-3 min-[680px]:grid-cols-2 grid-cols-1 min-[1180px]:w-full min-[1180px]:justify-evenly mx-auto">
          <div
            className="border-4 bg-white border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[280px] mx-8 mt-4 hover:scale-105"
            style={{ transition: "all 0.4s ease-in-out" }}
          >
            <div className="p-5 min-[1180px]:pt-20 pt-14 flex justify-center">
              <img
                src={Product4}
                alt="Product3"
                className="min-[1180px]:h-[240px] h-[220px] min-[1180px]:mt-[40px] mt-[24px] min-[1180px]:mb-[20px] mb-[10px]"
              />
            </div>
            <div className="font-lexend min-[1180px]:text-xl text-lg pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">Purely Majestic</p>
              <div className="flex justify-between text-base mt-1">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div
            className="border-4 bg-white border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[280px] mx-8 mt-4 hover:scale-105"
            style={{ transition: "all 0.4s ease-in-out" }}
          >
            <div className="p-5 min-[1180px]:pt-20 pt-14 flex justify-center">
              <img
                src={Product5}
                alt="Product3"
                className="min-[1180px]:h-[240px] h-[220px] min-[1180px]:mt-[40px] mt-[24px] min-[1180px]:mb-[20px] mb-[10px]"
              />
            </div>
            <div className="font-lexend min-[1180px]:text-xl text-lg pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">You are the swagger</p>
              <div className="flex justify-between text-base mt-1">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div
            className="border-4 bg-white max-[1020px]:min-[680px]:col-span-2 col-span-1 border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[280px] mx-8 mt-4 hover:scale-105"
            style={{ transition: "all 0.4s ease-in-out" }}
          >
            <div className="p-5 min-[1180px]:pt-20 pt-14 flex justify-center">
              <img
                src={Product6}
                alt="Product3"
                className="min-[1180px]:h-[240px] h-[220px] min-[1180px]:mt-[40px] mt-[24px] min-[1180px]:mb-[20px] mb-[10px]"
              />
            </div>
            <div className="font-lexend min-[1180px]:text-xl text-lg pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">Peace Within</p>
              <div className="flex justify-between text-base mt-1">
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
  );
};

export default NewArrivals;
