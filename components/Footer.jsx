import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black  text-white px-4 lg:px-8'>
      <div className='max-w-screen-2xl mx-auto w-full py-8 flex flex-col gap-8'>

        {/* join card */}
        <div className='p-6 rounded-xl text-center flex flex-col lg:flex-row items-center lg:text-left gap-4 justify-between bg-[#1c1c1c]'>
          <div className='flex flex-col lg:flex-row items-center gap-4'>
            <div className='w-[60px] h-[60px] '>
              <img src="/logo-community.svg" alt="logo" />
            </div>
            <div>
              <p className='lg:pb-0 pb-4  text-xl font-semibold'>Join in our awesome community</p>
              <p>Submit ideas, discuss trending topics, gain insights - and access premium features free forever.</p>
            </div>
          </div>
          <Button className="bg-white text-black hover:text-black hover:bg-white">Get Started</Button>
        </div>

        <img src="/3d-text.png" alt="" />

        <div className='flex flex-col lg:flex-row items-center text-center gap-8 justify-between'>
          <div>
            <p>2261, Market Street #05309<br></br>Dubai, UAE, 94411</p>
            <div className='flex gap-4'>
              <div className='w-[20px] h-[20px]'>icons</div>
              <div className='w-[20px] h-[20px]'>icons</div>
              <div className='w-[20px] h-[20px]'>icons</div>
              <div className='w-[20px] h-[20px]'>icons</div>
            </div>
            <p>Loyaltri</p>
          </div>

          <div className='flex flex-col gap-8 md:flex-row w-full justify-around'>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold'>Documentation</p>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold'>Documentation</p>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
            </div>
          </div>

          <div className='flex flex-col gap-8  md:flex-row w-full justify-around'>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold'>Documentation</p>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-semibold'>Documentation</p>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
              <Link href='#' className='opacity-80 hover:opacity-100 text-sm'>Getting Started</Link>
            </div>
          </div>
        </div>

        <p className='text-center text-sm opacity-60'>2024 Copyright. All right reserved</p>

      </div>
    </footer>
  )
}

export default Footer