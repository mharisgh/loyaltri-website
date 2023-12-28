import React from 'react'
import { Button } from './ui/button'

const QuickLinkSection = () => {
  return (
    <div className='flex flex-col gap-6 py-20 max-w-screen-2xl px-4 lg-px-8 mx-auto'>

      <div className='group transition-all duration-200 bg-[#f6f7f9] cursor-pointer hover:bg-gradient-to-r hover:from-[#151515] hover:to-[#2a272a] hover:text-white border border-gray-200 min-h-[136px] items-center flex  p-4 rounded-2xl w-full relative'>
        <div className='flex gap-4 lg:gap-8 flex-col lg:flex-row lg:items-center'>
          <div className='bg-gray-200 group-hover:bg-white flex justify-center items-center rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'>
            <svg className='lg:w-[32px] lg:h-[32px] w-[26px] h-[26px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#000"></path></svg>
          </div>
          <div>
            <h6 className='text-xl font-medium'>Read FAQ</h6>
            <p className='text-sm lg:text-base mt-2'>Submit ideas, discuss trending topics, gain insights - and access premium features free forever.</p>
          </div>
        </div>



        <div className='group-hover:bg-white/10 absolute w-[70px] right-3 top-2 lg:top-5 lg:w-[100px] rounded-xl  bg-[#edeeef] flex justify-center items-center h-[70px] lg:h-[100px]'>
          <img className='group-hover:saturate-100 saturate-0 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' src="/support2.webp" alt="faq" />
        </div>

      </div>


      <div className='group transition-all duration-200 bg-[#f6f7f9] cursor-pointer hover:bg-gradient-to-r hover:from-[#151515] hover:to-[#2a272a] hover:text-white border border-gray-200 min-h-[136px] items-center flex  p-4 rounded-2xl w-full relative'>
        <div className='flex gap-4 lg:gap-8 flex-col lg:flex-row lg:items-center'>
          <div className='bg-gray-200 group-hover:bg-white flex justify-center items-center rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'>
            <svg className='lg:w-[32px] lg:h-[32px] w-[26px] h-[26px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#000"></path></svg>
          </div>
          <div>
            <h6 className='text-xl font-medium'>Read FAQ</h6>
            <p className='text-sm lg:text-base mt-2'>Submit ideas, discuss trending topics, gain insights - and access premium features free forever.</p>
          </div>
        </div>



        <div className='group-hover:bg-white/10 absolute w-[70px] right-3 top-2 lg:top-5 lg:w-[100px] rounded-xl  bg-[#edeeef] flex justify-center items-center h-[70px] lg:h-[100px]'>
          <img className='group-hover:saturate-100 saturate-0 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' src="/support2.webp" alt="faq" />
        </div>

      </div>


      <div className='group transition-all duration-200 bg-[#f6f7f9] cursor-pointer hover:bg-gradient-to-r hover:from-[#151515] hover:to-[#2a272a] hover:text-white border border-gray-200 min-h-[136px] items-center flex  p-4 rounded-2xl w-full relative'>
        <div className='flex gap-4 lg:gap-8 flex-col lg:flex-row lg:items-center'>
          <div className='bg-gray-200 group-hover:bg-white flex justify-center items-center rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]'>
            <svg className='lg:w-[32px] lg:h-[32px] w-[26px] h-[26px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#000"></path></svg>
          </div>
          <div>
            <h6 className='text-xl font-medium'>Read FAQ</h6>
            <p className='text-sm lg:text-base mt-2'>Submit ideas, discuss trending topics, gain insights - and access premium features free forever.</p>
          </div>
        </div>



        <div className='group-hover:bg-white/10 absolute w-[70px] right-3 top-2 lg:top-5 lg:w-[100px] rounded-xl  bg-[#edeeef] flex justify-center items-center h-[70px] lg:h-[100px]'>
          <img className='group-hover:saturate-100 saturate-0 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]' src="/support2.webp" alt="faq" />
        </div>

      </div>


      <div className='bg-gradient-to-b from-[#5004cc] via-[#8544ee] to-[#ebe1ff] flex flex-col justify-center items-center px-4 lg:px-8 py-10 lg:py-14 rounded-2xl text-white text-center gap-8 border border-[#d4b9fd]'>
        <h5 className='lg:text-4xl text-3xl font-semibold'>HRMS reimagined.<br></br>Say goodbye to repetitive manual work</h5>
        <p className='text-sm lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>
        <div className='flex pt-4 flex-col lg:flex-row gap-4'>
          <Button className="bg-white text-black hover:text-black hover:bg-white">Schedule a Demo</Button>
          <Button variant="">Contact an Expert</Button>
        </div>
      </div>

    </div>
  )
}

export default QuickLinkSection