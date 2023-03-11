import React from 'react'
import bg from '../../Images/rates/BG.png'
import bitcoin from '../../Images/rates/bitcoin.png'
import bank from '../../Images/rates/bank-building.png'
import Transfer from '../../Images/rates/Transfer.png'
import DoubleTrans from '../../Images/rates/DoubleT.png'
import Group2 from '../../Images/rates/Group2.png'
import './rates.css'
const Rates = () => {
  return (

    <div style={{backgroundImage:`url(${bg})`}} className='w-full bg-center h-[900px] 2xl:min-h-[1300px] bg-no-repeat bg-cover flex justify-center items-center '>
      <div className='w-[80%] sm:w-[50%] lg:w-[1000px] h-[320px] pb-2  shadow-xl scroll scroll rounded-3xl overflow-y-auto mt-36 bg-white '>
      <div className='flex justify-around border-b-2 items-center h-[80px]  text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>
        <p  >OUR RATES</p>
        <p className='hidden lg:block'>OUR RESERVES</p>
        <p className='hidden lg:block'>LATEST EXCHANGES</p>
        
      </div>
      <div  className='flex flex-col lg:flex-row justify-center gap-12 items-center  '>

      <div className='flex flex-col gap-10  '>
<div className='flex gap-5 mt-10' >

<p className='flex items-center justify-center gap-3 h-fit'>BTC <img src={bitcoin} alt="" /></p>
<div className='flex flex-col gap-3'>
    
<p>We Buy @ <b>  ₦350/$ </b></p>
<p>We Sell <b>@ ₦370/$ </b></p>
</div>
</div>



<div className='flex gap-8' >

<p className='flex items-center justify-center gap-3 h-fit'>ETH <img src={Group2} alt="" /></p>
<div className='flex flex-col gap-3'>
    
<p>We Buy @ <b>  ₦350/$ </b></p>
<p>We Sell <b>@ ₦370/$ </b></p>
</div>
</div>
      </div>
      <p className='block lg:hidden text-center border-b-2 pb-2  text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>OUR RESERVES</p>

      <div className='flex flex-col gap-5 lg:mt-10'>
     
     
      
      <div className='flex flex-col gap-5' >

<p className='flex flex-row gap-10 h-fit'><div className='flex items-center justify-center gap-2 h-fit '>Bank Transfer  <img src={bank} alt="" /></div> <p>NGN</p>  </p>
<p className='self-end'> <b>#3452030300303.24/$ </b> </p>
      </div>

    

<p className='flex gap-10 h-fit'>
  
    <div
className='flex items-center justify-center gap-2 h-fit'        >
Bitcoin  <img src={bitcoin} alt="" />
    </div>
<p><b>399.98</b> BTC</p>
    </p>  
    


<p className='flex gap-10 h-fit'>
    <div
className='flex items-center justify-center gap-2 h-fit'        >
Ethereum <img src={Group2} alt="" /> 
    </div>
    <p><b>1000.00</b> ETH</p>
    </p> 

        </div>
      <p className='block lg:hidden text-center border-b-2 pb-2 text-2xl font-bold leading-tight text-transparent h bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text'>LATEST EXCHANGES</p>

      <div  className='flex flex-col gap-2 lg:mt-1'>
        <button className='self-end p-1 text-xs text-white rounded-md bg-gradient-to-br from-pink-500 to-indigo-900'>8 hours ago</button>
        <div className='flex flex-col '>
<div>

        <p className='flex items-center  justify-start h-fit' >
<p>Bitcoin BTC</p> <img src={Transfer} alt="" /> Bank
        </p>
        <p> 
Transfer NGN</p>
</div>
        </div>
        
<p className='flex items-center justify-start gap-2 py-3 border-b-2'><p className='whitespace-nowrap'><b>1.16</b> BTC</p> <img src={DoubleTrans} alt="" /> <p className='lg:whitespace-nowrap' ><b>696152299929.23</b> NGN</p> </p>
<p className='flex flex-col items-center gap-4 justify-start h-fit '>
<div className='flex flex-row items-center  justify-start h-fit'>
     Amazon Card <img className='' src={Transfer} alt="" />     Bank 
    </div>
<p>Transfer NGN</p>
</p>
      </div>
      </div>
      </div>
    </div>

  )
}

export default Rates
