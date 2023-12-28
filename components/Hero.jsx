import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='pt-12 lg:pt-0'>
      <div className='flex flex-col items-center lg:pt-[120px] pt-[50px] px-4 overflow-hidden text-center gap-y-4'>

        <h1 className='font-black tracking-tighter leading-tight text-[2.5rem] lg:text-6xl'>HRMS Platform<br></br>
          Designed by <span className='inline-block'>HR for HR</span>
        </h1>
        <p>A ton of automation, simple pricing, fast support -  made for HR pros by the Loyaltri community</p>
        <div className='flex pt-8 gap-x-4'>
          <Button variant="outline">Learn More</Button>
          <Button variant="outline">Join our Community.<span>Its FREE</span></Button>
        </div>
        <p>5,000+   HR users shape our product to serve HR needs best.</p>

        {/* scrolling btn & screens image */}
        <div className='pt-8 lg:max-w-screen-2xl w-full flex flex-col items-center lg:px-8'>
          <div className='flex gap-x-10 max-w-[90vw] no-scrollbar overflow-x-auto'>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-[40px] h-[40px] bg-green-600'></div>
              <p>Attendance</p>
            </div>
          </div>
          <Image className='w-[90vw]  pt-4 md:w-full' src='/hero-img.png' width={50} height={50} alt='loyaltri web application screen' />
        </div>

        {/* Integration & Partners */}
        <div className='my-14'>
          <p>Integration & Partners</p>
          <div className='flex gap-x-8 mt-4 overflow-scroll max-w-fit '>
            <div>Muqeem</div>
            <div>Muqeem</div>
            <div>Muqeem</div>
            <div>Muqeem</div>
            <div>Muqeem</div>
            <div>Muqeem</div>
            <div>Muqeem</div>
            <div>Muqeem</div>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Hero