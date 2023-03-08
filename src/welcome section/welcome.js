import React from "react";
import img from './img.png'

const Welcome = () => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-center gap-10 sm:mx-10 ">
    <img src={img} className='w-auto md:w-[50%] lg:w-auto' alt="" />
    <div className="flex flex-col gap-5 w-[90%] sm:w-[400px] text-justify">
    <p className="text-[22px] sm:text-[28px] font-bold leading-tight text-transparent whitespace-nowrap   bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text">Welcome to CoinBase <img src="Line.png" className="w-[50px] mt-1" alt="" /></p>
    
      <p>
        We have the best rates . Simply start your exchange right now. Sign up
        for our Affiliate program and earn commission from each exchange. The
        earnings are credited in your account instantly and can be withdrawn
        right away. Also note some exchange directions are hidden for
        unregistered user. To ensure to have access to all our exchange
        directions and benefits kindly sign up and verify your identity.
      </p>
      <button className="self-start text-[14px]  font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[157px] h-[54px] rounded-full">
        DISCOVER
      </button>
    </div>
    </div>
    
  );
};

export default Welcome;
