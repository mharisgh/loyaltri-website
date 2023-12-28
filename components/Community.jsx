import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import HeadingDesc from './HeadingDesc'
import { whyCardsContent } from '../constants'

const Community = () => {
  return (
    <section className='bg-black w-full text-white py-8'>
      <div className='text-center'>

        {/* community title */}
        <div className='flex flex-col gap-4 py-8'>
          <p className='font-bold text-sm'>Built for Us, by Us</p>
          <h1 className='heading'>Access to the <span className=''>fastest growing<br></br>
            HR community</span></h1>
        </div>

        {/* portrait photos & circle */}
        <div className='relative h-fit w-[100vw] overflow-hidden'>

          {/* circle design & btn */}
          <div className='w-full h-full flex justify-center items-center absolute z-[10]'>
            <div className='max-w-[400px] rounded-full flex flex-col justify-center gap-10 min-h-[400px] bg-black/80 border-[12px] border-white/10  '>

              <div className=''>
                <p className='text-3xl font-bold'>One app to<br></br>
                  replace them all</p>
                <p className='mt-2 text-sm w-[90%] mx-auto'>Submit ideas, discuss trending topics, gain insights - and access premium features free forever</p>
              </div>

              <div>
                <Button className="bg-[#a80fee]">Join our Community, Its FREE</Button>
                <p className='text-xs mt-2'>Join with 5,000+ HR experts and practitioners</p>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-black via-black/30 to-black absolute w-full h-full'>
          </div>

          {/* portrait */}
          <div className='flex flex-col gap-y-4'>
            <div className='flex gap-x-4'>
              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>
            </div>

            <div className='flex ml-10 gap-x-4'>
              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>
            </div>

            <div className='flex gap-x-4'>
              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>

              <div className='w-fit h-fit bg-gray-800 p-2 rounded-xl'>
                <div className='w-[120px] h-[120px] rounded-lg overflow-hidden'>
                  <Image className='w-full h-full object-cover' src='/portrait.webp' width={10} height={10} alt='community members portraits' unoptimized />
                </div>
                <p className='font-semibold text-sm pt-2'>Khalid bin Walid</p>
                <p className='text-xs'>IBM - <span>HR Specialist</span></p>
              </div>
            </div>
          </div>

        </div>

        {/* why loyaltri */}
        <div className='pt-20 pb-20 lg:px-8 max-w-screen-2xl mx-auto px-4'>

          <HeadingDesc
            badgeText={'Why choose us'}
            // badgeImg={'/card-icon-1.svg'}
            badgeBgColor={'#1d2127'}
            title={'Why choose Loyaltri ?'}
            desc={'Here are several features we provide to you to make the greatest HRM system for your business.'}
            itemsLayout={'items-center'}
          />

          {/* why choose cards */}
          <div className='flex gap-x-8 pt-[60px] lg:justify-center overflow-x-scroll no-scrollbar '>
            {whyCardsContent.map((data) => (
              <div className='group transition duration-200 text-start bg-white/10 p-6 flex flex-col gap-4 rounded-xl border border-white/20 hover:border-violet-600 min-w-[280px]  '>
                <div className='group-hover:bg-violet-800 bg-white/10 p-3 w-fit rounded-full'>
                  <Image src={data.logo} width={24} height={24} alt='why loyaltri app reason icons' />
                </div>
                <p className='text-semibold'>{data.title}</p>
                <p className='text-sm leading-relaxed lg:text-base'>{data.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Community