import React from 'react'
import bg from './bg.png'
import img from './test.png'
const client = () => {
  return (
    <div className='flex justify-center gap-32 lg:gap-52  items-center flex-col bg-cover bg-center bg-no-repeat h-[1000px] lg:h-[1415px]' style={{backgroundImage:`url(${bg})`}}>
      <p className='mt-52 text-white font-medium text-center text-xl'>10,000 Satisfied clients
around the world</p>
<img src={img} alt="" />
    </div>
  )
}

export default client
