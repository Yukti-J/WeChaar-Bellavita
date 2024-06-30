import React from "react";
import Profile from "../assets/Profile.png";
import Perfume from "../assets/Perfume.png";
import Search from "../assets/Search.png";
import NavLogo from "../assets/NavLogo.png";

const Navbar = (props) => {
  return (
    <>
      <div
        className={`flex justify-between w-[96%] m-auto items-center pt-2  ${props.background}`}
      >
        <div className="flex items-center w-[15%]">
          <button>
            <img src={Profile} alt="Profile" className="w-8 h-8" />
          </button>
          <button>
            <img src={Perfume} alt="Pefume" className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col self-center">
          <button>
            <img
              src={NavLogo}
              alt="Logo"
              className="min-[740px]:h-16 h-10 min-[740px]:w-72 min-[510px]:w-64 w-56"
            />
          </button>
        </div>
        <div className="w-[15%]">
          <input
            className={`border-2 border-bg-pink shadow-xl rounded-full px-2 py-1 text-sm w-full text-white max-[550px]:hidden ${props.search}`}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={`flex justify-center w-[96%] m-auto items-center -mt-3`}>
        <button>
          <img
            src={NavLogo}
            alt="Logo"
            className={`min-[740px]:h-16 h-10 min-[740px]:w-72 min-[510px]:w-64 w-56 opacity-20 -scale-y-100`}
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
