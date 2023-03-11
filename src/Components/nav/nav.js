
import React, { useState } from 'react';
import Logo from '../../Images/nav/Logo.png';
import Li from './li'
import { Link } from 'react-router-dom';
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
      <a href="javascript:void(0)" className="absolute top-[20px] right-[45px] text-[60px]" onClick={onClose}>
        &times;

      </a>
      <div className="relative cursor-pointer text-[30px]  top-[25%] w-full text-bold  text-center mt-[30px] list-none ">

        <Li></Li>

      </div>
    </div>
  );
};

const Nav = ({children}) => {
  const [path, setPath] = useState(window.location.pathname);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
console.log("inNAV")
  return (
    <>
      <nav className="grid  grid-cols-12 grid-rows-1 justify-center items-center w-full  h-[8.3125rem] ">

        {/*  */}
        <div className='hidden md:block col-start-2  col-end-4 lg:col-end-5 ' onClick={()=>setPath(window.location.pathname)}>

          <Link to='/' >

            <img src={Logo} className="  h-[1.875rem] mb-2 max-w-[8.875rem] " alt="" />
          </Link>
        </div>

        <button className='md:hidden  text-2xl   col-start-1 col-end-3 ' onClick={openOverlay}>&#9776;</button>
        <ul className="hidden col-start-4 lg:col-start-5 col-end-10 lg:col-end-9   leading-[1.3125rem] md:flex gap-[6%]  lg:gap-[10%] font-bold text-[0.875rem] justify-center items-center text-base">
          <Li {...{path,setPath}}></Li>
        </ul>
        <div className="flex lg:col-start-9 sm:col-start-9 col-start-7  sm:mr-0   md:col-start-10 col-end-13 gap-4   justify-center items-center">
          <select className=' lg:w-auto w-[3rem] font-bold text-[0.875rem]'>
            <option >Sell BitCoin/Giftcars</option>
          </select>

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

