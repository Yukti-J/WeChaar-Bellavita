import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePerfume from "../assets/HomePerfume.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-full bg-gradient-to-r from-bg-blue to-bg-pink overflow-hidden">
        <Navbar
          search="bg-bg-pink"
          background="bg-gradient-to-r from-bg-blue to-bg-pink"
        />
        <div className="flex flex-col justify-center items-center mt-20 pb-36">
          <p 
          className="min-[1250px]:text-[120px] min-[1040px]:text-[100px] min-[740px]:text-[70px] min-[510px]:text-[48px] text-[36px] font-marko text-heading-1">
            DISCOVER THE ART
          </p>
          <img
            src={HomePerfume}
            alt="HomePerfume"
            className="min-[1040px]:h-[500px] min-[740px]:h-[400px] min-[510px]:h-[280px] h-[150px] min-[1040px]:-mt-60 min-[740px]:-mt-40 min-[510px]:-mt-28 -mt-20 z-10 opacity-95 perfume"
          />
          <img
            src={HomePerfume}
            alt="HomePerfume"
            className="min-[1040px]:h-[500px] min-[740px]:h-[400px] min-[510px]:h-[280px] h-[150px] min-[740px]:-mt-40 min-[510px]:-mt-20 -mt-10 z-0 opacity-20 -scale-y-90"
          />
          <p className="min-[1250px]:text-[120px] min-[1040px]:text-[100px] min-[740px]:text-[70px] min-[510px]:text-[48px] text-[36px] font-marko text-heading-2 min-[1040px]:-mt-[570px] min-[740px]:-mt-[410px] min-[510px]:-mt-[280px] -mt-[170px] z-20 drop-shadow-2xl">
            OF PERFUMERY
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
