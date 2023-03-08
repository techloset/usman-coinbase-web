import React from 'react'
import bg from './BG.png'
import img from './IMG.png'
import icons from './Icons.png'
import Footer from '../footer/footer'
import Nav from '../nav/nav'
const blogContent = () => {
  return (
    <>
  <Nav/>

    <div style={{backgroundImage:`url(${bg})`}}  className='flex gap-40  bg-no-repeat  h-[750px] bg-cover bg-center justify-center items-center'>


<div className='text-white text-center '>
<p className='text-[20px] mx-2 md:text-[25px] lg:text-[32px] font-bold'>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER Transactions</p>

<p>19 JUNE, 2019 | BUSINESS </p>

</div>
  </div>
  <div className='flex flex-col  gap-10 justify-center items-center text-justify  '>

  <p className='w-[70%]'>

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

</p>
<p  className='w-[70%]'>

Planning Your Luxury Trip 
</p>
<p  className='w-[70%]'>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

</p>
<p  className='w-[70%]'> 
The next part of planning is to determine your starting and ending ports. This could be a place close to home and sail in one area or start and finish at two different ports. Generally, starting and stopping in the same port will save you money and is usually more convenient. You can also fly to a destination far from home and then sail another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.

</p>
<p  className='w-[70%]'>




Determining the type of cruise is another aspect of planning a chartered yachting trip. You can have as little or many crew members as the ship will hold. A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation package.
</p>
  <div  className='flex justify-center items-center'>
    <div className='flex flex-col w-[70%] md:w-[40%] md:gap-40'>
        <p>

Destinations & Ports of important Charter Companies  One of the greatest benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and that can be affected by weather. However, you are flexible in deciding how long you want to stay in a particular port and if you want to add or subtract stops along the way.
        </p>
    <img src={img} className='md:hidden block  m-auto my-3 w-[50%]' alt="" />

        <p>
        If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will direct you as to your “chores” for keeping the ship in top shape and on course. 

        </p>
    </div>
    <img src={img} className='hidden md:inline-block w-[30%]' alt="" />
  </div>
  <div className='w-[70%]'>
    <p >
    Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Then you take all of your luggage and unpack it just once to enjoy several days of new destinations.

    </p>
    <p>

If you have never experienced cruising before, a chartered experience is a great way to get your feet wet. It is different from cruise lines with thousands of guests because the people on your ship will be your friends and family. The personal touches of a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.
    </p>

  </div>
  <div className='flex justify-around items-center  gap-5 md:gap-0 flex-col md:flex-row w-full'>
    <p>
      Tags: Business, Capital, Finance
    </p>
    <div className='flex justify-center items-center gap-4'>
    Share with <img src={icons} alt="" />
    </div>

  </div>
  <div className='flex justify-around items-center  gap-5 md:gap-0 flex-col md:flex-row w-[70%] md:w-[93%]'>
    <div>

    <p>
    How to sell your iTunes giftcard with us
    </p>
    <p>Prev Post</p>
    </div>
    <div>
      <p className='font-bold text-transparent bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>Exchange 5 products and get 1 free product</p>
      <p>Next Post</p>
    </div>
  </div>


  <div  className='flex w-full flex-col justify-center items-center gap-10'>
    <div className='w-[70%] md:w-[65%]'>

    <p>Leave A Comment</p>
    <p>Your email address will not be published. Required fields are marked *</p>
    </div>
    <form action="" className='flex flex-col items-center justify-center w-full gap-10'>
      <div className='w-full flex gap-5 md:gap-[10%] flex-col md:flex-row items-center  justify-center  '>

      <input type="text" className='w-[80%] md:w-[35%] h-[60px] border border-solid border-gray-300' placeholder='Name' name="" id="" />
      <input type="text" className='w-[80%] md:w-[35%] h-[60px] border border-solid border-gray-300' placeholder='Name' name="" id="" />
      </div>
      

<textarea name="" id=""  className='w-[80%] h-[190px] border border-solid border-gray-300 resize-none'></textarea>
    <div className='w-[80%]'>

<button className="self-start text-2xl font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[157px] h-[54px] rounded-full">
PUBLISH
      </button>
    </div>
    </form>
  </div>


  </div>
  <Footer></Footer>
    </>
  )
}

export default blogContent
