import React from 'react'
import bg from '../../Images/contactPage/bgImg.png'
import img from '../../Images/contactPage/Group.png'
import imgMap from '../../Images/contactPage/map.png'
import Footer from '../../Components/footer/footer'
import Nav from '../../Components/nav/nav'
const contact = () => {
  return (
     <>

        <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-20 xl:gap-40 bg-no-repeat w-full h-[750px] sm:h-[750px] bg-cover bg-center justify-end sm:justify-center items-center"
      >
        <div className="flex flex-col gap-4 md:self-start ml-5 sm:w-[475px] text-white sm:mb-28 md:mb-0  md:mt-40">
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
       
      <img src={img} alt=""className='w-auto  h-[250px] md:h-[300px] lg:h-[405px] mt-10 sm:mt-0  sm:mb-36' />

      </div>
<div className='flex flex-col text-center justify-center items-center gap-5'>
  <p>Please note that all message will be replied within the next 12hours</p>
  <form action="" className='flex flex-col items-center justify-center w-full gap-10'>
      <div className='w-full flex gap-5 md:gap-[10%] flex-col md:flex-row items-center  justify-center  '>

      <input type="text" className='rounded-md pl-2 w-[80%] md:w-[35%] h-[60px] border border-solid border-gray-300' placeholder='Name' name="" id="" />
      <input type="text" className='rounded-md pl-2 w-[80%] md:w-[35%] h-[60px] border border-solid border-gray-300' placeholder='Name' name="" id="" />
      </div>
      

<textarea name="" id=""  className='rounded-md w-[80%] h-[190px] border border-solid border-gray-300 resize-none'></textarea>
    <div className='w-[80%] flex'>

<button className="self-start text-2xl  font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[157px] h-[54px] rounded-full">
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
