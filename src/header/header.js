import img from './IMG.png'
import React from 'react'
import bg from './BG.png'

const Header = () => {
  return (
    
    <div style={{backgroundImage:`url(${bg})`}}  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-30 xl:gap-40 bg-no-repeat w-full h-[900px] sm:h-[750px] bg-cover bg-center justify-end sm:justify-center items-center'>
        
      <div className='flex flex-col gap-4  sm:w-[400px] text-white mb-24 sm:ml-10 m-4 lg:ml-20' >
        <p className='md:text-[30px] text-[20px] ' >We provide easy solution 
to exchange your <span className='font-black '> Bitcoin/ 
GiftCard for money</span></p>
<p className='text-[15px] sm:text-[16px]'>CoinBase is a platform for trading your bitcoin and 
giftcard at the best rate, why not give us a trial.</p>
<button className=' w-[157px] h-[54px]   bg-white rounded-full self-start'><span className='text-transparent bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>GET STARTED</span> </button>
      </div>
      <img src={img} alt=""className='sm:mt-40 md:mt-32 h-[300px] md:h-[350px] md:h-[400px] lg:h-[519px] sm:self-start lg:mt-7  ' />

    </div>
  )
}

export default Header


