import React from 'react'
import HeadingDesc from './HeadingDesc'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


const Mobile = () => {
  return (
    <section className='dark-gradient py-10 lg:py-20'>
      <div className='lg:max-w-screen-2xl w-full mx-auto flex flex-col items-center lg:gap-20 gap-10'>
        {/* Heading */}
        <div className='lg:max-w-[600px] mx-auto px-4 lg:px-8'>
          <HeadingDesc
            badgeText={'Mobile app'}
            // badgeImg={'/card-icon-1.svg'}
            badgeBgColor={'#6a4bfc'}
            title={'Access Your HR Anywhere with the Loyaltri Mobile App'}
            desc={'Here are several features we provide to you to make the greatest HRM system for your business.'}
            itemsLayout={'items-end'}
            textLayout={'items-center'}
            textColor={'text-white'}
          />
        </div>

        {/* phone & cards */}
        <div className=' text-white lg:flex gap-20'>
          <div className='hidden mobile-app-cards lg:flex flex-col gap-4'>
            <div className='group lg:max-w-[340px] bg-gradient-to-r from-[#000] to-[#171717] p-5 border border-gray-700 rounded-2xl hover:bg-[#8cff66] transition duration-300'>

              <div className='flex gap-4 items-center mb-8  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit fugit voluptas perferendis saepe odio explicabo.</p>
            </div>

            <div className='group lg:max-w-[340px] bg-gradient-to-r from-[#000] to-[#171717] p-5 border border-gray-700 rounded-2xl hover:bg-[#8cff66] transition duration-300'>

              <div className='flex gap-4 items-center mb-8  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-sm lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit fugit voluptas perferendis saepe odio explicabo.</p>
            </div>
            <div className='group lg:max-w-[340px] bg-gradient-to-r from-[#000] to-[#171717] p-5 border border-gray-700 rounded-2xl hover:bg-[#8cff66] transition duration-300'>

              <div className='flex gap-4 items-center mb-8  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-sm lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit fugit voluptas perferendis saepe odio explicabo.</p>
            </div>


          </div>

          {/* s23 ultra */}
          <div>
            <img className='object-contain' src="/mobile.png" alt="loyaltri mobile app screen" />
          </div>

          <div className='hidden mobile-app-cards lg:flex flex-col gap-4'>
            <div className='group lg:max-w-[340px] bg-gradient-to-r from-[#000] to-[#171717] p-5 border border-gray-700 rounded-2xl hover:bg-[#8cff66] transition duration-300'>

              <div className='flex gap-4 items-center mb-8  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit fugit voluptas perferendis saepe odio explicabo.</p>
            </div>

            <div className='group lg:max-w-[340px] bg-gradient-to-r from-[#000] to-[#171717] p-5 border border-gray-700 rounded-2xl hover:bg-[#8cff66] transition duration-300'>

              <div className='flex gap-4 items-center mb-8  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-sm lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit fugit voluptas perferendis saepe odio explicabo.</p>
            </div>
            <div className='group lg:max-w-[340px] bg-gradient-to-r from-[#000] to-[#171717] p-5 border border-gray-700 rounded-2xl hover:bg-[#8cff66] transition duration-300'>

              <div className='flex gap-4 items-center mb-8  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-sm lg:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odit fugit voluptas perferendis saepe odio explicabo.</p>
            </div>


          </div>
        </div>

        {/* mobile cards */}

        <div className='lg:hidden w-full flex flex-col gap-4 '>
          <div className=' w-full overflow-scroll flex gap-4 no-scrollbar'>
            <div className='group lg:hidden min-w-[160px] bg-gradient-to-r from-[#000] to-[#171717] p-3 border border-gray-700 rounded-2xl hover:bg-[#8cff66] text-white transition duration-300'>

              <div className='flex gap-4 items-center mb-4  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='lg:hidden min-w-[160px] rounded-2xl overflow-hidden '>
              <img className='w-full h-full object-cover' src="/tracking.png" alt="mobile app feature image" />

            </div>

            <div className='group lg:hidden min-w-[160px] bg-gradient-to-r from-[#000] to-[#171717] p-3 border border-gray-700 rounded-2xl hover:bg-[#8cff66] text-white transition duration-300'>

              <div className='flex gap-4 items-center mb-4  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='lg:hidden min-w-[160px] rounded-2xl overflow-hidden '>
              <img className='w-full h-full object-cover' src="/tracking.png" alt="mobile app feature image" />

            </div>

            <div className='group lg:hidden min-w-[160px] bg-gradient-to-r from-[#000] to-[#171717] p-3 border border-gray-700 rounded-2xl hover:bg-[#8cff66] text-white transition duration-300'>

              <div className='flex gap-4 items-center mb-4  '>
                <div className='bg-[#8cff66]  p-2 w-fit h-fit rounded-full   group-hover:outline group-hover:outline-1 group-hover:outline-gray-400 '>
                  <img className='w-[20px] h-[20px]' src="/home-icon.svg" alt="home icon" />
                </div>
                <p className='font-semibold text-lg'>Home</p>
              </div>

              <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        {/* app store links */}
        <div className='flex flex-col justify-center items-center gap-4 '>
          <p className='text-white'>Version 2.0 Launching soon</p>
          <div className='flex gap-4'>
            <Button variant="outline"><img src='/onboard.svg' className='w-[20px] h-[20px] mr-2' />App store</Button>
            <Button variant="outline"><img src='/onboard.svg' className='w-[20px] h-[20px] mr-2' />Google Play</Button>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Mobile