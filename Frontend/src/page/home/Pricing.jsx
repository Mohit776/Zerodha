import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing flex flex-row items-center justify-center h-[45vh] mt-16  mx-[7vw] space-y-8'>
      <div className='flex flex-col justify-center space-y-4 text-[#424242] w-[40%]'>
        <h4>Unbeatable pricing</h4>
        <p className='text-[#666]'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      </div>

      <div className='flex flex-row  space-x-4 w-60%'>
        <div className='flex'>
          <img src="/Images/pricing0.svg" className='h-28' alt="" />

          <p className='text-[10px] w-6   -ml-8'> Free account opening</p>
        </div>

        <div className='flex'>
          <img src="/Images/pricing0.svg" className='h-28' alt="" />
          <p className='text-[9px] w-12   -ml-8'>  Free equity delivery and direct mutual funds</p>
        </div>
        <div className='flex'>
          <img src="/Images/20.png" className='h-28' alt="" />
          <p className='text-[10px] w-6   -ml-8'>  Intraday and F&O</p>
        </div>
      </div>

    </div>
  )
}

export default Pricing
