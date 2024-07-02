import React from "react";
import Profile from "../assets/Profile.png";
import Perfume from "../assets/Perfume.png";
import Search from "../assets/Search.png";
import NavLogo from "../assets/NavLogo.png";

const Navbar = (props) => {
  return (
    <>
      <div
        className={`flex justify-between w-[96%] m-auto items-center pt-3  ${props.background} border-b-2 border-gray-100 border-opacity-60`}
      >
        <div className="flex items-center w-[15%]">
          <button>
            <img src={Profile} alt="Profile" className="w-10 h-10 rounded-[50px] px-1 py-1 hover:bg-[#6D074C] max-[640px]:" />
          </button>
          <button>
            <img src={Perfume} alt="Pefume" className="w-10 h-10 ml-2 rounded-[50px] px-1 py-1 hover:bg-[#6D074C] max-[650px]:hidden" />
          </button>
        </div>
        <div className="flex flex-col self-center">
          <button>
            <img
              src={NavLogo}
              alt="Logo"
              className="min-[740px]:h-16 h-10 "
            />
          </button>
        </div>
        <div className="w-[15%] flex">
          <input
            className={`border-2 px-3 py-1	 placeholder:italic capitalize focus:outline-none border-bg-pink shadow-xl rounded-full px-2 py-1 text-sm w-full text-white max-[650px]:hidden ${props.search}`}
            placeholder="Search..."
          /> <img src={Search} alt="" className="cursor-pointer rounded-[50px] px-1 py-1 w-9 h-9 ml-1.5 hover:bg-[#6D074C]" />
        </div>
      </div>
      <div className={`flex justify-center w-[96%] m-auto items-center -mt-3`}>
        {/* <button>
          <img
            src={NavLogo}
            alt="Logo"
            className={`min-[740px]:h-16 h-10 min-[740px]:w-72 min-[510px]:w-64 w-56 opacity-20 -scale-y-100`}
          />
        </button> */}
      </div>
    </>
  );
};

export default Navbar;
