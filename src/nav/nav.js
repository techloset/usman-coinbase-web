
import React, { useState } from 'react';
import Logo from './Logo.png';
import './nav.css'
import Li from './li'

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

const Nav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      <nav className="flex justify-center items-center gap-5 pb-5 sm:gap-5 lg:gap-14 xl:gap-20">
      <button className='md:hidden pt-3 text-2xl' onClick={openOverlay}>&#9776;</button>

        {/*  */}
        <img src={Logo} className="pt-[14px] lg:pt-2 w-[100px] lg:w-auto" alt="" />
        <ul className="hidden pt-5  md:flex gap-8 font-bold justify-center items-center text-base">
          <Li></Li>
        </ul>
        <div className="flex pt-4 gap-4 justify-center items-center">
          <select className="w-[54px] lg:w-auto">
            <option value="Sell BitCoin/Giftcars">Sell BitCoin/Giftcars</option>
          </select>

          <button className="bg-gradient-to-br text-white xl:font-bold text-sm p-2 w-auto h-auto xl:w-[157px] xl:h-[54px] uppercase from-pink-500 to-indigo-900 rounded-full">
            Login
          </button>
        </div>
      </nav>
      <OverlayMenu isOpen={isOverlayOpen} onClose={closeOverlay} />
    </>
  );
};

export default Nav;

