import React from 'react'
import bg from '../../Images/clients/bg.png'
import img from '../../Images/clients/test.png'
import curveTop from '../../Images/clients/pt.png'
import curveBottom from '../../Images/clients/pb.png'
import mask1 from '../../Images/clients/maskt.png'
import mask2 from '../../Images/clients/maskb.png'
const client = () => {
  return (
    <div style={{backgroundImage:`url(${bg})`}}
    className=' bg-cover bg-no-repeat w-full relative flex flex-col items-center justify-center'>
<img src={curveTop} className='w-full' alt="" />
    <div className='flex justify-center relative z-10 gap-10 md:gap-0 pt-[123px] w-full items-center flex-col bg-cover bg-center bg-no-repeat ' >
      <div className='flex  flex-col text-center text-white items-center gap-5'>

      <p className='  font-bold leading-[42px]  text-center text-[28px]'>10,000 Satisfied clients <br className='sm:block hidden' />
around the world</p>
<img src="Line.png" className='m-auto' alt="" />
<p className='w-[80%] lg:w-[42%] leading-[40px]'>Yeah! we’re  proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>
      </div>
<img src={img} className='w-[80%] mb-[67px] z-10 '  alt="" />

    </div>
 
<img src={curveBottom}  className='w-full  ' alt="" />
<img src={mask1} className='absolute left-[10.7%] top-[28%] z-0' alt="" />
<img src={mask2} className='absolute right-[8.3%] bottom-[17%] z-0' alt="" />
    </div>

  )
}

export default client
