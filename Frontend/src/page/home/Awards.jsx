import React from 'react'


const Awards = () => {
  return (

    <>
    <div className="awards flex flex-row items-center justify-center h-[90vh] mx-[14vw]">
      
      <div className="flex flex-col  justify-center space-y-4 text-[#424242] w-[40%]">

        <div className='mb-8 text-3xl'>Trust with confidence</div>

        <div>
          <h5>Customer-first always</h5>

          <p className='text-[#666]'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
        </div>

          <div>
          <h5>No spam or gimmicks</h5>

          <p className='text-[#666]'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
        </div>


          <div>
          <h5>The Zerodha universe</h5>

          <p className='text-[#666]'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
        </div>

          <div>
          <h5>Do better with money</h5>

          <p className='text-[#666]'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
      </div>

      <div  className='w-[60%] h-full flex items-center justify-center'>
        <img src="/Images/ecosystem.png" alt=""  className='h-[75vh] '/>
      </div>
        
      
    </div>
    <img src="/Images/pressLogos.png" alt=""  className='mx-auto  mt-9' />

    </>
  )
}

export default Awards
