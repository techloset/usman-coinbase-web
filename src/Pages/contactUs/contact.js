import React from 'react'
import bg from '../../Images/contactPage/bgImg.png'
import img from '../../Images/contactPage/Group.png'
import imgMap from '../../Images/contactPage/map.svg'
import Footer from '../../Components/footer/footer'
import path from '../../Images/header/p.png'

const contact = () => {
  return (
     <>

        {/* <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-20 xl:gap-40 bg-no-repeat w-full h-[750px] sm:h-[750px] bg-cover bg-center justify-end sm:justify-center items-center"
      >
        <div className="flex flex-col gap-4 md:self-start ml-5 sm:w-[475px] text-white sm:mb-28 md:mb-0  md:mt-40">
  >
        
        </div>
       


      </div>
       */}
          {/* <div 
    style={{background:'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)'}} 
    className=' flex flex-col justify-between'

    >

    <div  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-[10%]   xl:gap-[7%]  bg-no-repeat w-full 
     bg-cover bg-center justify-end sm:justify-center items-center '>
        
      <div className='flex flex-col gap-[21px]   sm:w-[400px] text-white p-7 sm:p-0 sm:mt-[142px]   sm:ml-10  lg:ml-20' >
     
      </div>
      <img src={img} alt=""className='w-auto  h-[250px] md:h-[300px] lg:h-[405px] mt-10 sm:mt-0  sm:mb-36' />


    </div>
<img src={path} className='w-full ' alt="" />
       </div> */}
       <div 
    style={{background:'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)'}} 
    className=' flex flex-col justify-between'

    >

    <div  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-[10%]   xl:gap-[7%]  bg-no-repeat w-full 
     bg-cover bg-center justify-end sm:justify-center items-center '>
        
        <div className="flex flex-col mb-[50px] sm:mb-[175px] gap-4 self-start ml-5 sm:w-[475px] text-white  sm:mt-40">
        <p>HOME/CONTACT US</p>
          <p className="md:text-[40px] md:leading-[60px] font-bold text-[20px] ">
          24/7 Customer support
Including weekends.
          </p>

          <p className="text-[15px] sm:text-[16px]">
            CWe’re always there ti help regardless the number
of queries at hand.
          </p>
        
        </div>
        <img src={img} alt=""className='w-auto  h-[250px] md:h-[400px] lg:h-[500px] mt-0 lg:mt-28   ' />


    </div>
<img src={path} className='w-full ' alt="" />
       </div>
<div className='flex flex-col text-center justify-center items-center gap-[30px] mb-[87px]'>
  <p className='mt-[20px] w-[80%]'>Please note that all message will be replied within the next 12hours</p>
  <form action="" className='flex flex-col items-center justify-center w-full gap-10'>
      <div className='w-full flex gap-5 md:gap-[4%] flex-col md:flex-row items-center  justify-center  '>

      <input type="text" className='rounded-md focus:outline-none p-[20px] w-[80%] md:w-[23%] h-[60px]  border-[1px] border-[#D1D1D1] placeholder:text-[#2F2F2F]' placeholder='Name *' name="" id="" />
      <input type="text" className='rounded-md  focus:outline-none p-[20px] w-[80%] md:w-[23%] h-[60px]  border-[1px] border-[#D1D1D1] placeholder:text-[#2F2F2F]' placeholder='Email *' name="" id="" />
      </div>
      

<textarea placeholder='Your Comment' name="" id=""  className='placeholder:text-[#2F2F2F] p-[20px] box-border rounded-md w-[80%] md:w-[50%] h-[190px]  border-[1px] border-[#D1D1D1] resize-none'></textarea>
    <div className='w-[80%] md:w-[50%] flex'>

<button className="self-start text-[14px]  mt-[20px] mb-[60px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[157px] h-[54px] rounded-full">
PUBLISH
      </button>
    </div>
    </form>
    <img src={imgMap} className='w-[80%] md:w-auto' alt="" />
</div>
<Footer></Footer>
     </>
  )
}

export default contact
