import img from '../../Images/header/IMG.png'
import React from 'react'
import bg from '../../Images/header/BG.png'

const Header = () => {
  return (
    <>
    <div style={{backgroundImage:`url(${bg})`}}  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-[10%]   xl:gap-[7%]  bg-no-repeat w-full h-[900px] sm:h-[750px] 2xl:min-h-[1100px]
     bg-cover bg-center justify-end sm:justify-center items-center '>
        
      <div className='flex flex-col gap-[21px]   sm:w-[400px] text-white p-7 sm:p-0  mb-24 sm:ml-10  lg:ml-20' >
        <p className='md:text-[30px] text-[20px] ' >We provide easy solution 
to exchange your <span className='font-black '> Bitcoin/ 
GiftCard for money</span></p>
<p className='text-[15px] sm:text-[16px]'>CoinBase is a platform for trading your bitcoin and 
giftcard at the best rate, why not give us a trial.</p>
<button className=' w-[157px] h-[54px] mt-[9px]  bg-white rounded-full self-start'><span className='text-transparent bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>GET STARTED</span> </button>
      </div>
      <img src={img} alt=""className=' h-[300px] md:h-[350px]  xl:h-[519px]  sm:mb-20 xl:mb-32' />

    </div>

       </>
  )
}

export default Header


