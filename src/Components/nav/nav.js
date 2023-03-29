import React, { useState } from "react";
import Logo from "../../Images/nav/Logo.png";
import Li from "./li";
import { Link } from "react-router-dom";
import icon from "../../Images/nav/d.svg";
const OverlayMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`overlay h-screen
      w-0
      fixed
      z-10
      top-0
      left-0
       text-white    
       bg-gradient-to-t   from-pink-500 to-indigo-900 
      overflow-x-hidden
      transition-all
      duration-500
      `}
      style={{ width: isOpen ? "100%" : "0%" }}
    >
      <a
        href="javascript:void(0)"
        className="absolute top-[20px] right-[45px] text-[60px]"
        onClick={onClose}
      >
        &times;
      </a>
      <div className="relative cursor-pointer text-[30px]  top-[25%] w-full text-bold  text-center mt-[30px] list-none ">
        <Li></Li>
      </div>
    </div>
  );
};

const Nav = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const [dropDown, setDropDown] = useState(false);
  function toggleDropDown() {
    setDropDown(!dropDown);
  }
  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
  console.log("inNAV");
  return (
    <>
      <nav className="grid  grid-cols-12 grid-rows-1 justify-center items-center w-full  h-[8.3125rem] ">
        {/*  */}
        <div
          className="hidden md:block col-start-2  col-end-4 lg:col-end-5 "
          onClick={() => setPath(window.location.pathname)}
        >
          <Link to="/">
            <img
              src={Logo}
              className="  h-[1.875rem] mb-2 max-w-[8.875rem] "
              alt=""
            />
          </Link>
        </div>

        <button
          className="md:hidden  text-2xl   col-start-1 col-end-3 "
          onClick={openOverlay}
        >
          &#9776;
        </button>
        <ul className="hidden col-start-4 lg:col-start-5 col-end-10 lg:col-end-9 text-[0.875rem]  leading-[1.3125rem] md:flex gap-[6%]  lg:gap-[10%] font-bold justify-center items-center text-base">
          <Li {...{ path, setPath }}></Li>
        </ul>
        <div className="flex lg:col-start-9 sm:col-start-9 col-start-7  sm:mr-0   md:col-start-10 col-end-13 gap-4   justify-center items-center">
          <button
            onClick={toggleDropDown}
            className="lg:w-auto  mt-1 font-bold text-[0.875rem] flex items-center justify-center gap-1
            "
            type="button"
          >
            <p className="xl:block hidden">Sell Bitcoin/ Giftcard</p> <p className=" block xl:hidden">Sell</p> <img src={icon} alt="" />
          </button>

        
            <ul
           
              className={`z-10 mt-[130px]  sm:ml-[3rem] xl:ml-[5rem] border-[1px] border-[#E0E0E0] w-[110px] sm:w-[142px] absolute  opacity-80 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-white-700  ${
                dropDown ? "block" : "hidden"
              }   `}
            >
              <li  className="pl-3 py-2 text-[#333333] text-[12px] hover:bg-white ">
                
                 
                  Sell Bitcoin
              </li>
              <li  className="block pl-3 py-[6px]   text-[#FFFFFF] text-[12px] rounded-bl-lg rounded-br-lg dark:hover:bg-white "
                  style={{
                    background:
                      "linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)",
                  }}>
               
                 
                  Sell Giftcard
              </li>
            </ul>

          <button className="bg-gradient-to-br text-white xl:font-bold text-sm  w-[5.625rem]  xl:w-[9.8125rem] h-[3.375rem] uppercase from-pink-500 to-indigo-900 rounded-full">
            Login
          </button>
        </div>
      </nav>
      {children}
      <OverlayMenu isOpen={isOverlayOpen} onClose={closeOverlay} />
    </>
  );
};

export default Nav;
