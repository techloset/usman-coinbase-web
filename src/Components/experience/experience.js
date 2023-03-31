import img from '../../Images/experience/ex.png'
const Experience = () => {
    return (
      <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-14 sm:mx-10">
      <div className="flex flex-col gap-10 w-[80%] sm:w-[400px] text-justify">
      <p className=" text-[22px] sm:text-[28px] font-bold text-transparent  bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text leading-[42px]">Great experience <br/>
with CoinBase <img src="Line.png" className='w-[50px] mt-1' alt="" /></p>

        <p className='leading-[40px]'>
        CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.

        </p>
        <button className="self-start  text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[157px] h-[54px] rounded-full">
          DISCOVER
        </button>
      </div>
      <img src={img} className=' w-[50%] lg:w-auto' alt="" />
      </div>
      
    );
  };
  
  export default Experience;
  