import React from "react";
import Bottle1 from "../assets/Bottle1.png";
import Bottle2 from "../assets/Bottle2.png";
import Bottle3 from "../assets/Bottle3.png";
import Bottle4 from "../assets/Bottle4.png";
import BottleCap from "../assets/BottleCap.png";

const Why = () => {
  const openBottel = (c, tb) => {
    document.getElementById(c).classList.add("hidden");
    document.getElementById(tb).classList.remove("hidden"); 
    document.getElementById(tb).classList.add("opacity-100");
  };

  const closeBottel = (c, tb) => {
    document.getElementById(tb).classList.add("opacity-0");
    document.getElementById(tb).classList.add("hidden");
    document.getElementById(c).classList.remove("hidden");
  };
  return (
    <div className="flex flex-col mt-10 justify-between">
      <p className="text-3xl font-lexend pt-4 mx-auto">WHY BELLAVITA?</p>
      <div className="overflow-x-scroll">
      <div className="flex min-w-[1400px] min-[1400px]:justify-around mt-14 h-full mx-auto mb-10">
        <div className="w-1/4 flex flex-col items-center mx-5 cursor-pointer">
          <div
            className="w-3/4 flex flex-col items-center justify-end"
            onMouseEnter={() => openBottel("cap1", "text-box1")}
            onMouseLeave={() => closeBottel("cap1", "text-box1")}
            style={{ transition: "all 0.8s" }}
          >
            <div className="h-32 flex flex-col items-center  ">
            <img
              src={BottleCap}
              alt="BottleCap"
              className="w-4/5 z-10 mt-auto"
              id="cap1"
              style={{ transition: "all 0.8s ease-in-out" }}
            />
            <div
              className="opacity-0 z-0 hidden mt-auto mb-5"
              id="text-box1"
              style={{ transition: "all 0.8s ease-in-out" }}
            >
              <p className="text-center text-lg font-lexend text-bg-blue ">
              CRUELTY FREE
              </p>
              <p className="text-center text-sm font-lexend text-gray-600 mb-[10px]">
              Kindness in every bottle: Our commitment to cruelty-free Products.
              </p>
            </div>
            </div>
            <img
              src={Bottle2}
              alt="Bottle1"
              className="-mt-[10px]"
              id="bottle4"
            />
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-center mx-5 cursor-pointer">
          <div
            className="w-3/4 flex flex-col items-center justify-end"
            onMouseEnter={() => openBottel("cap2", "text-box2")}
            onMouseLeave={() => closeBottel("cap2", "text-box2")}
            style={{ transition: "all 0.8s" }}
          >
            <div className="h-32 flex flex-col items-center  ">
            <img
              src={BottleCap}
              alt="BottleCap"
              className="w-4/5 z-10"
              id="cap2"
              style={{ transition: "all 0.8s ease-in-out" }}
            />
            <div
              className="opacity-0 z-0 hidden mt-auto mb-5"
              id="text-box2"
              style={{ transition: "all 0.8s ease-in-out" }}
            >
              <p className="text-center text-lg font-lexend text-bg-blue ">
                FRAGRANCE
              </p>
              <p className="text-center text-sm font-lexend text-gray-600 mb-[10px]">
                Luxurious & imported perfume oils in every product
              </p>
            </div>
            </div>
            <img
              src={Bottle4}
              alt="Bottle1"
              className="-mt-[18px]"
              id="bottle4"
            />
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-center mx-5 cursor-pointer">
          <div
            className="w-3/4 flex flex-col items-center justify-end"
            onMouseEnter={() => openBottel("cap3", "text-box3")}
            onMouseLeave={() => closeBottel("cap3", "text-box3")}
            style={{ transition: "all 0.8s" }}
          >
            <div className="h-32 flex flex-col items-center  ">
            <img
              src={BottleCap}
              alt="BottleCap"
              className="w-4/5 z-10"
              id="cap3"
              style={{ transition: "all 0.8s ease-in-out" }}
            />
            <div
              className="opacity-0 z-0 hidden mt-auto mb-5"
              id="text-box3"
              style={{ transition: "all 0.8s ease-in-out" }}
            >
              <p className="text-center text-lg font-lexend text-bg-blue ">
              AFFORDABLE
              </p>
              <p className="text-center text-sm font-lexend text-gray-600 mb-[10px]">
              Offering Premium Quality and Elegance at a Reasonable Price
              </p>
            </div>
            </div>
            <img
              src={Bottle3}
              alt="Bottle1"
              className="-mt-[18px]"
              id="bottle4"
            />
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-center mx-5 cursor-pointer">
          <div
            className="w-3/4 flex flex-col items-center justify-end"
            onMouseEnter={() => openBottel("cap4", "text-box4")}
            onMouseLeave={() => closeBottel("cap4", "text-box4")}
            style={{ transition: "all 0.8s" }}
          >
            <div className="h-32 flex flex-col items-center  ">
            <img
              src={BottleCap}
              alt="BottleCap"
              className="w-4/5 z-10"
              id="cap4"
              style={{ transition: "all 0.8s ease-in-out" }}
            />
            <div
              className="opacity-0 z-0 hidden mt-auto mb-5"
              id="text-box4"
              style={{ transition: "all 0.8s ease-in-out" }}
            >
              <p className="text-center text-lg font-lexend text-bg-blue ">
              GENDER NEUTRAL
              </p>
              <p className="text-center text-sm font-lexend text-gray-600 mb-[10px]">
              Elevate your self-care routine with bath, body and personal care for all
              </p>
            </div>
            </div>
            <img
              src={Bottle1}
              alt="Bottle1"
              className="-mt-[18px]"
              id="bottle4"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );    
};

export default Why;
