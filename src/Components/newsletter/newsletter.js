import React from 'react'

const newsletter = ({height=500}) => {
  return (
    <div style={{height:`${height}px`}}    className={`    flex gap-5 justify-center  md:justify-end flex-col items-center`}> 
      <p className='text-[20px] sm:text-[28px] font-bold  bg-gradient-to-r from-pink-500 via-pink-600 to-indigo-900 text-transparent bg-clip-text flex flex-col items-center'>Subscribe our newsletter <img src="Line.png" className='w-[50px]' alt="" /></p>
      <p className='text-center sm:w-auto'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
      <div className='flex flex-col  sm:flex-row gap-4'> 
        <input type="text" placeholder='Email' className='py-2 pl-4 w-[100%] sm:w-[388px] h-[54px] rounded-full border-2 border-pink-500 focus:outline-none' name="" id="" />
        <button className="text-[16px] ml-[8%] sm:ml-0 sm:text-xl font-bold text-white bg-gradient-to-br from-pink-500 to-indigo-900 w-[100px] h-[40px] sm:w-[157px] sm:h-[54px] rounded-full">
        DISCOVER
      </button>
      </div>
    </div>
  )
}

 export default newsletter
