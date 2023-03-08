import React from 'react'
import icons from './Icons.png'
import logo from './Logo.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import img7 from './7.png'
import img8 from './8.png'
import { Link } from 'react-router-dom'
const footer = () => {
  return (
    <div>
<footer class="text-white  bg-black mt-10">
  <div class="container px-5 py-10 lg:py-24 mx-auto flex md:items-center lg:items-start  md:flex-row  justify-center items-center flex-wrap flex-col">
    <div class="w-64    sm:m-0 text-center md:text-left md:self-start">
      {/* <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> */}
       
        <img src={logo} className='m-auto md:m-0 mb-4' alt="" />
      {/* </a> */}
      <p class="mt-2 text-sm text-gray-500 my-5 hidden md:block"> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
      <img src={icons} className='hidden md:block' alt="" />
    </div>
    {/* <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"> */}
      <div class="px-4 hidden md:block">
        <h2 class="title-font text-white font-bold tracking-widest text-sm mb-3">CoinBase Links





</h2>
        <ul class="list-none mb-10 text-gray-600 ">
      
          <li> <Link to='/'>Home</Link> </li>
     <li> <Link to='/About'>About Us</Link> </li>
     <li> <Link to='/Blogpage'>Blog</Link> </li>
     <li> <Link to='/BlogContent'>Blog Content</Link> </li>
     <li> <Link to='/Contact'>Contact Us</Link> </li>
         
        </ul>
      </div>
      <div class=" px-4 m-auto md:m-0">
        <h2 class="title-font  text-white font-bold tracking-widest text-sm mb-3 hidden md:block">Contact Us</h2>
        <ul class="list-none mb-10 text-center md:text-justify">
        
          <li className='text-gray-600 hover:text-gray-800'>  
          (+234) 137632128
          </li>
          <li className='text-gray-600 hover:text-gray-800'>  
          Coinbase@yahoo.com
          </li>
          <li className='text-gray-600 hover:text-gray-800'>  
          Address goes here
          </li>
<li className='text-gray-600 hover:text-gray-800 mt-10' >Download Our App</li>
<li className='flex justify-center mt-4'>

<img src={icons} className='md:hidden block' alt="" />
</li>

        </ul>
      </div>
    
      <div class="hidden md:block m-auto sm:m-0  px-4">
        <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3 sm:mb-0">CoinBase Instagram</h2>
     
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
  {/* </div> */}

</footer>      
    </div>
  )
}

export default footer
