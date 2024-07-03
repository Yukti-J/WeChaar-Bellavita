import React from "react";
import Product2 from "../assets/Product2.png";
import Product1 from "../assets/Product1.png";
import Product3 from "../assets/Product3.png";
import { motion } from "framer-motion"
// I am a comment
const BestSellers = () => {
  return (
    <>
      <div className="w-[96%] m-auto shadow-fuchsia-800 shadow-md flex flex-col mt-10 mb-6 fadeanimation">
         {/* <motion.div className="animate-div"  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale:1 }} /> */}
        <div className="text-3xl font-against pt-4 mx-auto font-medium">BEST SELLERS</div>
        <div className=""> 
        <div className="my-8 grid justify-items-center min-[1020px]:grid-cols-3 min-[680px]:grid-cols-2 grid-cols-1 min-[1180px]:w-full min-[1180px]:justify-evenly mx-auto">
          <div className="border-4 border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[240px] mx-8 mt-4 hover:scale-105"
          style={{ transition: "all 0.4s ease-in-out" }}>
            <div className="p-5 min-[1180px]:pt-20 pt-10 flex justify-center">
              <img
                src={Product2}
                alt="Product2"
                className="min-[1180px]:h-[220px] h-[180px] min-[1180px]:mt-[60px] mt-[26px] min-[1180px]:mb-[20px] mb-[6px]"
              />
            </div>
            <div className="font-lexend min-[1180px]:text-xl text-base pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">Luxury Perfume Gift Set</p>
              <div className="flex justify-between text-sm mt-1">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="border-4 border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[240px] mx-8 mt-4 hover:scale-105"
          style={{ transition: "all 0.4s ease-in-out" }}>
            <div className="p-5 min-[1180px]:pt-20 pt-10 flex justify-center">
              <img
                src={Product1}
                alt="Product1"
                className="min-[1180px]:h-[240px] h-[180px] min-[1180px]:mt-[40px] mt-[24px] min-[1180px]:mb-[20px] mb-[8px]"
              />
            </div>
            <div className="font-lexend min-[1180px]:text-xl text-base pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">CEO Man Luxury Perfume</p>
              <div className="flex justify-between text-sm mt-1">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          <div className="border-4 max-[1020px]:min-[680px]:col-span-2 col-span-1 border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[240px] mx-8 mt-4 hover:scale-105"
          style={{ transition: "all 0.4s ease-in-out" }}>
            <div className="p-5 min-[1180px]:pt-20 pt-10 flex justify-center">
              <img
                src={Product3}
                alt="Product3"
                className="min-[1180px]:h-[240px] h-[180px] min-[1180px]:mt-[40px] mt-[26px] min-[1180px]:mb-[20px] mb-[6px]"
              />
            </div>
            <div className="font-lexend min-[1180px]:text-xl text-base pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">OUD Perfume</p>
              <div className="flex justify-between text-sm mt-1">
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
    </>
  );
};

export default BestSellers;
