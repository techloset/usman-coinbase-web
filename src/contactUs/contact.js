import React from 'react'
import bg from './bgImg.png'
import img from './Group.png'
import imgMap from './map.png'
import Footer from '../footer/footer'
import Nav from '../nav/nav'
const contact = () => {
  return (
     <>
  <Nav/>
    
<div style={{backgroundImage:`url(${bg})`}}  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-30 xl:gap-40 bg-no-repeat w-full h-[900px] sm:h-[750px] bg-cover bg-center justify-end sm:justify-center items-center'>
        
<div className='flex flex-col gap-4  sm:w-[400px] text-white mb-20 sm:ml-10 m-4 lg:ml-20' >
  <p className='md:text-[30px] text-[20px] ' >24/7 Customer support
Including weekends.</p>
<p className='text-[15px] sm:text-[16px]'>We’re always there ti help regardless the number
of queries at hand.</p>
<button className=' w-[157px] h-[54px]   bg-white rounded-full self-start'><span className='text-transparent bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>GET STARTED</span> </button>
</div>
<img src={img} alt=""className='sm:mt-40 md:mt-32 h-[300px] md:h-[350px] md:h-[400px] lg:h-[519px] sm:self-start lg:mt-7  ' />

</div>
<div className='flex flex-col text-center justify-center items-center gap-5'>
  <p>Please note that all message will be replied within the next 12hours</p>
  <form action="" className='flex flex-col items-center justify-center w-full gap-10'>
      <div className='w-full flex gap-5 md:gap-[10%] flex-col md:flex-row items-center  justify-center  '>

      <input type="text" className='w-[80%] md:w-[35%] h-[60px] border border-solid border-gray-300' placeholder='Name' name="" id="" />
      <input type="text" className='w-[80%] md:w-[35%] h-[60px] border border-solid border-gray-300' placeholder='Name' name="" id="" />
      </div>
      

<textarea name="" id=""  className='w-[80%] h-[190px] border border-solid border-gray-300 resize-none'></textarea>
    <div className='w-[80%]'>

<button className="self-start text-2xl font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[157px] h-[54px] rounded-full">
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
