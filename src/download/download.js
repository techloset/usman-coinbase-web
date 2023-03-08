import React from 'react'
import bg from './bg.png'
import phone1 from './X-2.png'
import phone2 from './ip.png'
import store from './Store.png'
const download = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='relative flex flex-col justify-center items-center bg-cover w-full h-[657px] bg-no-repeat bg-center'>
        <div className='flex flex-col justify-start h-full items-center gap-10'>

        <p className=' text-[20px] sm:text-[28px] font-bold  bg-gradient-to-r from-pink-500 via-pink-600 to-indigo-900 text-transparent bg-clip-text flex items-center flex-col '>Download our app <img src="Line.png" className='w-[50px]' alt="" /></p>
        
        <p className='w-[80%] sm:w-auto'>Discover exclusive deals and discounts with
 our mobile experience.</p>
 <img src={store} alt="" />

 



  


 </div>
 <div className='flex absolute gap-4 sm:gap-10 h-[100%] bottom-[-60%]'>
      <img src={phone1} className='h-[30%] sm:h-[50%] md:h-[70%] lg:h-[80%] ' alt="" />

      <img src={phone2} className='h-[30%] sm:h-[50%] md:h-[70%] lg:h-[80%]' alt="" />
        </div>
      
    </div>
  )
}

export default download
