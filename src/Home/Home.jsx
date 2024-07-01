import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePerfume from "../assets/HomePerfume.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="w-[100%] bg-gradient-to-r from-[#8F0060] via-[#12161C] to-[#3E162C] overflow-hidden min-[640px]:h-screen h-[440px]">
        <Navbar
          search="bg-[#6D074C]"
          background="bg-gradient-to-r from-[#8F0060] via-[#12161C] to-[#3E162C]"
        />
        <div className="flex flex-col justify-center items-center min-[510px]:mt-20 mt-40 min-[510px]:pb-36 pb-44 max-[510px]:h-full translate-y-[-60px]	">
          <p 
          className="min-[1250px]:text-[80px] min-[1040px]:text-[70px] min-[740px]:text-[45px] min-[510px]:text-[30px] text-[25px] font-against text-[#FFE1F1] min-[510px]:mt-16 text-center">
            DISCOVER THE ART
          </p>
          <img
            src={HomePerfume}
            alt="HomePerfume"
            className="min-[1040px]:h-[450px] min-[740px]:h-[350px] min-[510px]:h-[220px] h-[150px] min-[1040px]:-mt-52 min-[740px]:-mt-40 min-[610px]:-mt-28 -mt-14 z-10 opacity-95 perfume"
          />
          <img
            src={HomePerfume}
            alt="HomePerfume"
            className="min-[1040px]:h-[500px] min-[740px]:h-[400px] min-[510px]:h-[220px] h-[150px] min-[740px]:-mt-20 min-[510px]:-mt-20 -mt-10 z-0 opacity-20 -scale-y-90 blur-[1px]"
          />
          <p className="min-[1250px]:text-[120px] min-[1040px]:text-[100px] min-[740px]:text-[70px] min-[510px]:text-[48px] text-[38px] font-against text-[#f9efe3] min-[1040px]:-mt-[600px] min-[740px]:-mt-[460px] min-[510px]:-mt-[220px] -mt-[170px] z-20 drop-shadow-2xl">
            OF PERFUMERY
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
