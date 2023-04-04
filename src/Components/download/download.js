import React from 'react'
import bg from '../../Images/download/bg.png'
import phone1 from '../../Images/download/X-2.png'
import phone2 from '../../Images/download/ip.png'
import store from '../../Images/download/Store.png'
import curve from '../../Images/download/pt.png'
const download = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}} className='relative bg-cover bg-no-repeat bg-center '>
<img src={curve} alt="" className='absolute  w-full '/>
    <div className='relative  flex flex-col justify-center items-center w-full h-[500px] lg:h-[615px]'>
        <div className='flex flex-col justify-start h-full   items-center gap-1 xl:gap-10'>

     
 <img src={store} className='sm:w-auto w-[100px] mt-3 sm:mt-[36px] ' alt="" />

 



  


 </div>
 <div className='flex absolute gap-4 sm:gap-10 h-[100%] top-[40%] 2xl:top-[55%]'>
      <img src={phone2} className=' h-[50%] md:h-[70%] lg:h-[80%]' alt="" />
      <img src={phone1} className='h-[50%] md:h-[70%] lg:h-[80%] ' alt="" />

        </div>
      
    </div>
    </div>

  )
}

export default download
