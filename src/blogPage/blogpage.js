import React from 'react'
import bg from './BG.png';
import img from './1.png';
import gift from './img.png'
import m from './m.png'
import img401 from './401.png'
import Footer from '../footer/footer';
import Nav from '../nav/nav';
const blogpage = () => {
  return (
    <>
  <Nav/>
  
  <div style={{backgroundImage:`url(${bg})`}}  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-30 xl:gap-40 bg-no-repeat w-full h-[900px] sm:h-[750px] bg-cover bg-center justify-end sm:justify-center items-center'>
        
        <div className='flex flex-col gap-4  sm:w-[400px] text-white mb-20 sm:ml-10 m-4 lg:ml-20' >
        <p>HOME/ABOUT US</p>
        <p className='md:text-[30px] text-[20px] ' >
        Stay updated,
Never miss a post.
      </p>

  <p className='text-[15px] sm:text-[16px]'>CoinBase is a platform for trading your bitcoin and 
giftcard at the best rate, why not give us a trial.</p>
  <button className=' w-[157px] h-[54px]   bg-white rounded-full self-start'><span className='text-transparent bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>GET STARTED</span> </button>
        </div>
        <img src={img} alt=""className='sm:mt-40 md:mt-32 h-[300px] md:h-[350px]  lg:h-[450px] sm:self-start lg:mt-7  ' />
  
      </div>
  <div className='flex flex-col gap-20 justify-center items-center'>

  <div  className='flex flex-col justify-center items-center'>
    <img src={gift} alt="" className='w-[80%]' />
    <div className='w-[80%] p-2 md:p-10   text-center gap-4   flex flex-col justify-center items-center rounded-bl-lg rounded-br-lg border-l-2 border-r-2 border-t-0 border-b-2 border-solid border-pink-500 '>
        <p className=' text-transparent font-bold   bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text'>HOW TO SELL YOUR ITUNES GIFTCARD WITH US .</p>
        <p  className='text-[10px]'>19 JUNE, 2019 |  BUSINESS</p>
        <p className='text-[13px] sm:text-[16px]'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
        <button className="  text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] md:w-[157px] md:h-[54px] rounded-full">
        DISCOVER
      </button>
    </div>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <img src={m} className='w-[80%] rounded-tl-lg rounded-tr-lg' alt="" />
    <div className='w-[80%] p-2 md:p-10  gap-4  text-center flex flex-col justify-center items-center rounded-bl-lg rounded-br-lg  border-l-2 border-r-2 border-t-0 border-b-2 border-solid border-pink-500 '>
        <p className=' text-transparent font-bold  bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text'>EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</p>
        <p  className='text-[10px]'> 19 JUNE, 2019 |  BUSINESS</p>
        <p className='text-[13px] sm:text-[16px]'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
        <button className=" text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] md:w-[157px] md:h-[54px] rounded-full">
        DISCOVER
      </button>
    </div>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <img src={img401} className='w-[80%] rounded-tl-lg rounded-tr-lg'  alt="" />
    <div className='w-[80%] p-2 md:p-10  text-center  gap-4  flex flex-col justify-center rounded-bl-lg rounded-br-lg items-center  border-l-2 border-r-2 border-t-0 border-b-2 border-solid border-pink-500 '>
        <p className=' text-transparent  font-bold  bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text'>HOW TO SELL YOUR ITUNES GIFTCARD WITH US .</p>
        <p className='text-[10px]'>19 JUNE, 2019 |  BUSINESS</p>
        <p className='text-[13px] sm:text-[16px]'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
        <button className="  text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] md:w-[157px] md:h-[54px] rounded-full">
        DISCOVER
      </button>
    </div>
  </div>
  </div>
<Footer></Footer>
  </>

  )
}

export default blogpage
