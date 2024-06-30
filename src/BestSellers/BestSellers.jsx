import React from "react";
import Product2 from "../assets/Product2.png";
import Product1 from "../assets/Product1.png";
import Product3 from "../assets/Product3.png";

const BestSellers = () => {
  return (
    <>
      <div className="w-[96%] m-auto shadow-fuchsia-800 shadow-md flex flex-col my-6 ">
        <div className="text-3xl font-lexend pt-4 mx-auto">BEST SELLERS</div>
        <div className="overflow-x-auto flex"> 
        <div className="my-8 flex min-[1180px]:w-full min-[1180px]:justify-evenly mx-auto">
          <div className="border-4 border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[300px] mx-8 mt-2 ">
            <div className="p-5 pt-20 flex justify-center">
              <img
                src={Product2}
                alt="Product2"
                className="h-[280px]"
              />
            </div>
            <div className="font-lexend text-xl pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">Luxury Perfume Gift Set</p>
              <div className="flex justify-between text-base mt-1">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="border-4 border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[300px] mx-8 mt-2 ">
            <div className="p-5 pt-20 flex justify-center">
              <img
                src={Product1}
                alt="Product1"
                className="h-[280px]"
              />
            </div>
            <div className="font-lexend text-xl pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">CEO Man Luxury Perfume</p>
              <div className="flex justify-between text-base mt-1">
                <p className="pl-3 text-gray-700">Rs. 499.00</p>
                <button className="bg-gradient-to-r from-bg-blue to-bg-pink pt-1 px-2 text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="border-4   border-bg-pink rounded-t-full min-[1180px]:w-[320px] w-[300px] mx-8 mt-2">
            <div className="p-5 pt-20 flex justify-center">
              <img
                src={Product3}
                alt="Product3"
                className="h-[280px]"
              />
            </div>
            <div className="font-lexend text-xl pt-2 border-t-4 border-bg-pink">
              <p className="px-4 text-bg-blue">OUD Perfume</p>
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
    </>
  );
};

export default BestSellers;
