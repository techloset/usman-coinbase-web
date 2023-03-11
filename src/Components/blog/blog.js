import React from "react";

const blog = () => {
  return (
    <div className="mt-40 flex justify-center items-center flex-col relative">
      <p
        className=" font-bold text-[28px] bg-gradient-to-r from-pink-500 via-pink-600 to-indigo-900 text-transparent bg-clip-text
"
      >
        Our blog
      </p>
      <img src="Line.png" className="mt-3 mb-8" alt="" />
      <p>Get to know the latest stuff via our blog post.</p>
      <div className="flex justify-center xl:flex-row flex-col text-justify  items-center w-full mt-32 xl:gap-20">
      <div className="w-[70%] sm:w-[50%] md:w-[40%] xl:absolute py-2 xl:py-0 xl:left-[9%] z-10 top-[47%] bg-white h-auto xl:h-[286px] border border-gray-500 pl-7 pr-7 xl:pl-14 xl:pr-5 gap-3 text-gray-500 border-solid rounded-lg flex justify-center items-center flex-col ">
        <p className=" text-[11px] self-start">19 JUNE, 2019 | BUSINESS</p>
        <p className="text-[20px] font-bold ">
          EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
        </p>
        <p className=" text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea...
        </p>
        <button className="bg-gray-500 text-white rounded-full  w-[100px] h-[30px] md:w-[127px] md:h-[43px] text-[11px] self-start">
          {" "}
          READ MORE
        </button>
      </div>
        <div className="shadow-md bg-white z-20 py-2 xl:py-0 top-[39%] border border-solid border-pink-500 rounded-xl w-[80%] md:w-[60%] xl:w-[30%]  md:h-[358px] flex justify-center items-center flex-col gap-5  ">
          <p className="w-[75%] text-[11px]">19 JUNE, 2019 | BUSINESS</p>
          <p
            className="font-bold bg-gradient-to-r from-pink-500  via-pink-600 to-indigo-900 text-transparent bg-clip-text
text-[24px] w-[75%]"
          >
            ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
          </p>
          <p className="w-[75%] text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </p>

          <button className="self-start ml-[12.5%] text-2xl font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900   w-[100px] h-[30px] md:w-[127px] md:h-[43px] text-[11px] rounded-full">
            READ MORE
          </button>
        </div>
        <div className="w-[70%] sm:w-[50%] md:w-[40%] xl:absolute right-[8%] z-10 top-[47%] bg-white h-auto py-2 xl:py-0  xl:h-[286px] border border-gray-500 px-7 gap-3 text-gray-500 border-solid rounded-lg flex justify-center items-center flex-col ">
        <p className=" text-[11px] self-start">19 JUNE, 2019 | BUSINESS</p>
        <p className="text-[20px] font-bold ">
          EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
        </p>
        <p className=" text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea...
        </p>
        <button className="bg-gray-500 text-white rounded-full w-[100px] h-[30px] md:w-[127px] md:h-[43px] text-[11px] self-start xl:self-auto">
          {" "}
          READ MORE
        </button>
      </div>
      </div>

   
 
    </div>
  );
};

export default blog;
