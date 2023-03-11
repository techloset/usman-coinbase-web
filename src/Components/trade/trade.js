import React from "react";
import bg from "../../Images/trade/BG.png";
import card from "../../Images/trade/card.png";
import bitcoin from "../../Images/trade/bitcoin.png";
const Trade = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-no-repeat w-full h-[488px] mt-20 bg-cover bg-center flex justify-center items-center "
    >
      <div className="bg-white w-[80%] sm:w-[70%] lg:w-[980px] h-[504px] mt-40 gap-20 flex flex-col justify-center items-center shadow-md rounded-3xl  ">
        <p
          className="font-bold text-xl sm:text-2xl md:text-[28px] leading-10 text-right bg-gradient-to-r from-pink-500 via-pink-600 to-indigo-900 text-transparent bg-clip-text
"
        >
          Trade from anywhere
          <img src="Line.png" className="m-auto mt-3" alt="" />
        </p>
        <div className="flex justify-center items-center w-full gap-[5%] sm:gap-10">
          <div className="w-[40%] h-[150px] sm:h-[200px] lg:w-[262px] lg:h-[226px]  flex justify-center items-center flex-col gap-6 border border-solid border-pink-500 rounded-xl ">
            <img src={bitcoin} alt="" className="sm:w-auto w-10" />
            <p className="font-bold text-base leading-6">Bitcoin</p>
          </div>
          <div className="w-[40%] h-[150px] sm:h-[200px]  lg:w-[262px] lg:h-[226px] flex justify-center items-center flex-col gap-7 border border-solid border-pink-500 rounded-xl ">
            <img src={card} alt="" className="mt-3 sm:w-auto w-11" />
            <p className="font-bold text-base leading-6">Gift Cards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
