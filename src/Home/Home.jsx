import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import HomePerfume from "../assets/HomePerfume.png";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("perfumeBottle").classList.remove("i1");
    }, 3000)
  })
  return (
    <>
      <div className="w-[100%] bg-gradient-to-r from-[#8F0060] via-[#12161C] to-[#3E162C] overflow-hidden min-[740px]:h-screen h-full classhome">
        <Navbar
          search="bg-[#6D074C]"
          background="bg-gradient-to-r from-[#8F0060] via-[#12161C] to-[#3E162C]"
        />
        <div className="flex flex-col justify-center items-center min-[510px]:mt-20 mt-40 min-[510px]:pb-36 pb-44 max-[510px]:h-full">
          <p 
          className="min-[1250px]:text-[80px] min-[1040px]:text-[70px] min-[740px]:text-[45px] min-[510px]:text-[30px] text-[28px] font-against text-[#FFE1F1] min-[510px]:mt-16 text-center t1">
            DISCOVER THE ART
          </p>
          <img
            src={HomePerfume}
            alt="HomePerfume"
            id="perfumeBottle"
            className=" i1 min-[1040px]:h-[450px] min-[740px]:h-[350px] min-[510px]:h-[220px] h-[160px] min-[1040px]:-mt-52 min-[740px]:-mt-40 min-[510px]:-mt-22 -mt-14 z-10 opacity-95 perfume"
          />
          <img
            src={HomePerfume}
            alt="HomePerfume"
            className="i2 min-[1040px]:h-[480px] min-[740px]:h-[350px] min-[510px]:h-[220px] h-[150px] min-[740px]:-mt-20 min-[510px]:-mt-20 -mt-10 z-0 opacity-20 -scale-y-90"
          />
          <p className="min-[1250px]:text-[120px] min-[1040px]:text-[100px] min-[740px]:text-[70px] min-[510px]:text-[48px] text-[43px] font-against text-[#f9efe3] min-[1040px]:-mt-[600px] min-[740px]:-mt-[420px] min-[510px]:-mt-[220px] -mt-[180px] z-20 drop-shadow-2xl t1">
            OF PERFUMERY
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;