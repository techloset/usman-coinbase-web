import React from 'react'
import bg from '../../Images/clients/bg.png'
import img from '../../Images/clients/test.png'
const client = () => {
  return (
    <div className='flex justify-center relative  gap-10 md:gap-0 h-[1000px] sm:h-[1200px] xl:h-[1400px] 2xl:h-[1650px] items-center flex-col bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${bg})`}}>
      <div className='flex mt-20 flex-col text-center text-white items-center gap-5'>

      <p className='  font-bold leading-[42px]  text-center text-[28px]'>10,000 Satisfied clients <br />
around the world</p>
<img src="Line.png" className='m-auto' alt="" />
<p className='w-[80%] lg:w-[42%] leading-[40px]'>Yeah! we’re  proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>
      </div>
<img src={img} className='w-[80%] ' alt="" />
<p className='bottom-0 absolute text-[20px] sm:text-[28px] font-bold  bg-gradient-to-r from-pink-500 via-pink-600 to-indigo-900 text-transparent bg-clip-text flex items-center flex-col '>Download our app <img src="Line.png" className='w-[50px]' alt="" /></p>

    </div>
  )
}

export default client
