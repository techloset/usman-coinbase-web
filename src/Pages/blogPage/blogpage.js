import React from 'react'
import bg from '../../Images/blogPageImgs/BG.png';
import img from '../../Images/blogPageImgs/1.png';
import gift from '../../Images/blogPageImgs/img.png'
import m from '../../Images/blogPageImgs/m.png'
import img401 from '../../Images/blogPageImgs/401.png'
import Footer from '../../Components/footer/footer';
import Nav from '../../Components/nav/nav';
import path from '../../Images/header/p.png'
import { Link } from 'react-router-dom';
const blogpage = () => {
  return (
    <>


        <div 
    style={{background:'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)'}} 
    className=' flex flex-col justify-between'

    >

    <div  className='flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-[10%]   xl:gap-[7%]  bg-no-repeat w-full 
     bg-cover bg-center justify-end sm:justify-center items-center '>
        
        <div className="flex flex-col mb-[50px] sm:mb-[175px] gap-4 self-start ml-5 sm:w-[426px] text-white  sm:mt-40">
        <p>HOME/BLOG</p>
          <p className="md:text-[40px] md:leading-[60px] font-bold text-[20px] ">
          Stay updated,
Never miss a post.
          </p>

          <p className="text-[15px] sm:text-[16px]">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </p>
        
        </div>
        <img src={img} alt=""className='w-auto  h-[250px] md:h-[300px] lg:h-[405px] mt-10 sm:mt-28  ' />


    </div>
<img src={path} className='w-full ' alt="" />
       </div>
  <div className='flex flex-col gap-20 justify-center mt-10 items-center'>

  <div  className='flex flex-col justify-center items-center'>
    <img src={gift} alt="" className='w-[80%]' />
    <div className='w-[80%] p-2 md:p-10   text-center gap-4   flex flex-col justify-center items-center rounded-bl-lg rounded-br-lg border-l-2 border-r-2 border-t-0 border-b-2 border-solid border-pink-500 '>
        <p className=' text-transparent font-bold   bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text md:text-[32px] md:leading-[45px] text-[20px]'>HOW TO SELL YOUR ITUNES GIFTCARD WITH US .</p>
        <p  className='text-[10px]'>19 JUNE, 2019 |  BUSINESS</p>
        <p className='text-[13px] sm:text-[16px] w-[85%]'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
        <Link to='/blogContent'>
        <button className="  text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] md:w-[157px] md:h-[54px] rounded-full">
        DISCOVER
      </button>
        </Link>
    </div>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <img src={m} className='w-[80%] rounded-tl-lg rounded-tr-lg' alt="" />
    <div className='w-[80%] p-2 md:p-10  gap-4  text-center flex flex-col justify-center items-center rounded-bl-lg rounded-br-lg  border-l-2 border-r-2 border-t-0 border-b-2 border-solid border-pink-500 '>
        <p className=' text-transparent font-bold  bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text md:text-[32px] md:leading-[45px] text-[20px]'>EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.</p>
        <p  className='text-[10px]'> 19 JUNE, 2019 |  BUSINESS</p>
        <p className='text-[13px] sm:text-[16px] w-[85%]'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi  complectitur, postea verterem persecuti cu est, sea epicuri.</p>
        <Link to='/blogContent'>
        <button className="  text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] md:w-[157px] md:h-[54px] rounded-full">
        DISCOVER
      </button>
        </Link>
    </div>
  </div>
  <div className='flex flex-col justify-center items-center'>
    <img src={img401} className='w-[80%] rounded-tl-lg rounded-tr-lg'  alt="" />
    <div className='w-[80%] p-2 md:p-10  text-center  gap-4  flex flex-col justify-center rounded-bl-lg rounded-br-lg items-center  border-l-2 border-r-2 border-t-0 border-b-2 border-solid border-pink-500 '>
        <p className=' text-transparent  font-bold  bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text md:text-[32px] md:leading-[45px] text-[20px]'>HOW TO SELL YOUR ITUNES GIFTCARD WITH US .</p>
        <p className='text-[10px] flex gap-3'> |  BUSINESS</p>
        <p className='text-[13px] sm:text-[16px] w-[85%]'>Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.</p>
        <Link to='/blogContent'>
        <button className="  text-[14px] font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] md:w-[157px] md:h-[54px] rounded-full">
        DISCOVER
      </button>
        </Link>
    </div>
  </div>
  <div className='flex flex-col sm:flex-row justify-center items-center gap-3 py-14 h-full'>
    <div className='space-x-3'>

        <button className='rounded-full text-lg  w-14 h-14 text-white ' style={{ background: 'linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' }}>01</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white border border-gray-300'>02</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white  border border-gray-300'>03</button>
        <button className='rounded-full w-14 h-14 text-lg bg-white  border border-gray-300'>-</button>
    </div>
        <button className='rounded-full w-24 h-14 text-lg bg-white  border border-gray-300'>Next</button>
      </div>
  </div>
<Footer></Footer>
  </>

  )
}

export default blogpage
