import React from 'react'
import icons from '../../Images/footer/Icons.png'
import logo from '../../Images/footer/Logo.png'
import img1 from '../../Images/footer/1.png'
import img2 from '../../Images/footer/2.png'
import img3 from '../../Images/footer/3.png'
import img4 from '../../Images/footer/4.png'
import img5 from '../../Images/footer/5.png'
import img6 from '../../Images/footer/6.png'
import img7 from '../../Images/footer/7.png'
import img8 from '../../Images/footer/8.png'
import { Link } from 'react-router-dom'
const footer = () => {
  return (
    <div>
<footer className="text-[#A2A2A2] text-[18px] relative  bg-[#151515] mt-10">
  <div className="container px-5 py-10 lg:py-16 mx-auto flex md:items-center lg:items-start  md:flex-row  justify-between items-center flex-wrap flex-col">
    <div className="w-64    sm:m-0 text-center md:text-left md:self-start">

       
        <img src={logo} className='mx-auto md:mx-0 pb-5 md:pb-0 md:mb-9 ' alt="" />

      <p className="mt-2    hidden md:block text-[12px]"> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
      <img src={icons} className='hidden md:block mt-[20px]' alt="" />
      <p className='text-[12px] absolute bottom-0 text-center ml-5 md:ml-0'>
      © 2019  Designed by Cr8tiv_yemmy
      </p>
    </div>
 
      <div className="px-4 hidden md:block self-start">
        <h2 className=" text-white  tracking-widest  md:mb-9 ">CoinBase Links





</h2>
        <ul className="list-none text-[12px]   flex flex-col gap-3">
      
          <li> <Link to='/'>Home</Link> </li>
     <li> <Link to='/About'>About Us</Link> </li>
     <li> <Link to='/Blogpage'>Blog</Link> </li>
     <li> <Link to='/BlogContent'>Blog Content</Link> </li>
     <li> <Link to='/Contact'>Contact Us</Link> </li>
         
        </ul>
      </div>
      <div className=" px-4 m-auto md:m-0">
        <p className=" text-white  tracking-widest  mb-6 hidden md:block">Contact Us</p>
        <ul className="list-none  text-center md:text-justify text-[12px]">
        
          <li className=' '>  
          (+234) 137632128
          </li>
          <li className=' '>  
          Coinbase@yahoo.com
          </li>
          <li className=' '>  
          Address goes here
          </li>
<li className='  mt-5 md:mt-[85px]' >Download Our App</li>
<li className='flex justify-center mt-4'>

<img src={icons} className='md:hidden block' alt="" />
</li>

        </ul>
      </div>
    
      <div className="hidden lg:block m-auto sm:m-0  px-4">
        <h2 className="title-font  text-white tracking-widest  mb-3 sm:mb-[31px]">CoinBase Instagram</h2>
     
        <div className='flex  gap-2 my-2'>
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
<img src={img4} alt="" />
        </div>
      <div className='flex gap-2'>
<img src={img5} alt="" />
<img src={img6} alt="" />
<img src={img7} alt="" />
      <img src={img8} alt="" />
      </div>
      </div>
    </div>
  

</footer>      
    </div>
  )
}

export default footer
