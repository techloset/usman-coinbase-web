import React from 'react'
import bg from '../../Images/download/bg.png'
import phone1 from '../../Images/download/X-2.png'
import phone2 from '../../Images/download/ip.png'
import store from '../../Images/download/Store.png'
const download = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='relative  flex flex-col justify-center items-center bg-cover w-full h-[657px] xl:h-[800px] bg-no-repeat bg-center'>
        <div className='flex flex-col justify-start h-full   items-center gap-10'>

        
        <p className='w-[80%] mt-10 text-center sm:w-auto'>Discover exclusive deals and discounts with <br className='sm:block hidden' />
 our mobile experience.</p>
 <img src={store} alt="" />

 



  


 </div>
 <div className='flex absolute gap-4 sm:gap-10 h-[100%] bottom-[-60%]'>
      <img src={phone2} className='h-[30%] sm:h-[50%] md:h-[70%] lg:h-[80%]' alt="" />
      <img src={phone1} className='h-[30%] sm:h-[50%] md:h-[70%] lg:h-[80%] ' alt="" />

        </div>
      
    </div>
  )
}

export default download
