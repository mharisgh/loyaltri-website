import React from 'react'
import HeadingDesc from './HeadingDesc'
import { Button } from "@/components/ui/button"


const SuccessStories = () => {
  return (
    <section className='max-w-screen-2xl mx-auto '>
      {/* Heading */}
      <div className='py-10 relative px-4 lg:px-8 '>
        <HeadingDesc
          badgeText={'Features'}
          // badgeImg={'/card-icon-1.svg'}
          badgeBgColor={'#94f4f5'}
          title={'Success stories'}
          desc={'Find out how business like yours use loyaltri to streamline their customer experience.'}
          itemsLayout={'lg:items-start'}
          textLayout={'lg:items-left'}
        />
        <div className='hidden lg:block absolute bottom-10 right-6'>
          <Button variant="outline">See more</Button>
        </div>

      </div>

      <div className='w-full flex overflow-scroll no-scrollbar gap-4 pl-4 lg:pl-8'>
        <div className='lg:min-w-[410px] min-w-[280px] bg-[#1c1d21] text-white p-4 rounded-2xl'>
          <div className='flex justify-between items-center mb-4'>
            <img className='w-[48px] ' src="/quote-symbol.svg" alt="quote icon" />
            <div className='flex gap-2'>
              <img src="clock.svg" className='w-[20px] h-[20px]' alt="clock icon" />
              <p className='text-xs lg:text-sm'><span>4 </span>mins read</p>
            </div>
          </div>
          <p className='text-xs lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>

          <p className='pt-6 text-sm lg:text-sm'><span className='text-2xl font-semibold'>60%</span>&nbsp; &nbsp;Daily time freed up.</p>
          <p className='bg-white/15 py-1 mt-2 px-3 uppercase text-xs w-fit h-fit rounded-full'>Core HR</p>

          <div className='flex items-center gap-4 mt-6'>
            <img src="/profile1.png" alt="testimonial person image" />
            <div className=''>
              <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base'>Ismael Mustafa</p>
                <p className='text-white/60 text-xs italic'>HR Manager</p>
              </div>
              <p className='text-white/60 text-xs capitalize lg:text-sm'>nims school, Dubai</p>
            </div>
          </div>
        </div>

        <div className='lg:min-w-[410px] min-w-[280px] bg-[#1c1d21] text-white p-4 rounded-2xl'>
          <div className='flex justify-between items-center mb-4'>
            <img className='w-[48px] ' src="/quote-symbol.svg" alt="quote icon" />
            <div className='flex gap-2'>
              <img src="clock.svg" className='w-[20px] h-[20px]' alt="clock icon" />
              <p className='text-xs lg:text-sm'><span>4 </span>mins read</p>
            </div>
          </div>
          <p className='text-xs lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>

          <p className='pt-6 text-sm lg:text-sm'><span className='text-2xl font-semibold'>60%</span>&nbsp; &nbsp;Daily time freed up.</p>
          <p className='bg-white/15 py-1 mt-2 px-3 uppercase text-xs w-fit h-fit rounded-full'>Core HR</p>

          <div className='flex items-center gap-4 mt-6'>
            <img src="/profile1.png" alt="testimonial person image" />
            <div className=''>
              <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base'>Ismael Mustafa</p>
                <p className='text-white/60 text-xs italic'>HR Manager</p>
              </div>
              <p className='text-white/60 text-xs capitalize lg:text-sm'>nims school, Dubai</p>
            </div>
          </div>
        </div>

        <div className='lg:min-w-[410px] min-w-[280px] bg-[#1c1d21] text-white p-4 rounded-2xl'>
          <div className='flex justify-between items-center mb-4'>
            <img className='w-[48px] ' src="/quote-symbol.svg" alt="quote icon" />
            <div className='flex gap-2'>
              <img src="clock.svg" className='w-[20px] h-[20px]' alt="clock icon" />
              <p className='text-xs lg:text-sm'><span>4 </span>mins read</p>
            </div>
          </div>
          <p className='text-xs lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>

          <p className='pt-6 text-sm lg:text-sm'><span className='text-2xl font-semibold'>60%</span>&nbsp; &nbsp;Daily time freed up.</p>
          <p className='bg-white/15 py-1 mt-2 px-3 uppercase text-xs w-fit h-fit rounded-full'>Core HR</p>

          <div className='flex items-center gap-4 mt-6'>
            <img src="/profile1.png" alt="testimonial person image" />
            <div className=''>
              <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base'>Ismael Mustafa</p>
                <p className='text-white/60 text-xs italic'>HR Manager</p>
              </div>
              <p className='text-white/60 text-xs capitalize lg:text-sm'>nims school, Dubai</p>
            </div>
          </div>
        </div>

        <div className='lg:min-w-[410px] min-w-[280px] bg-[#1c1d21] text-white p-4 rounded-2xl'>
          <div className='flex justify-between items-center mb-4'>
            <img className='w-[48px] ' src="/quote-symbol.svg" alt="quote icon" />
            <div className='flex gap-2'>
              <img src="clock.svg" className='w-[20px] h-[20px]' alt="clock icon" />
              <p className='text-xs lg:text-sm'><span>4 </span>mins read</p>
            </div>
          </div>
          <p className='text-xs lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>

          <p className='pt-6 text-sm lg:text-sm'><span className='text-2xl font-semibold'>60%</span>&nbsp; &nbsp;Daily time freed up.</p>
          <p className='bg-white/15 py-1 mt-2 px-3 uppercase text-xs w-fit h-fit rounded-full'>Core HR</p>

          <div className='flex items-center gap-4 mt-6'>
            <img src="/profile1.png" alt="testimonial person image" />
            <div className=''>
              <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base'>Ismael Mustafa</p>
                <p className='text-white/60 text-xs italic'>HR Manager</p>
              </div>
              <p className='text-white/60 text-xs capitalize lg:text-sm'>nims school, Dubai</p>
            </div>
          </div>
        </div>

        <div className='lg:min-w-[410px] min-w-[280px] bg-[#1c1d21] text-white p-4 rounded-2xl'>
          <div className='flex justify-between items-center mb-4'>
            <img className='w-[48px] ' src="/quote-symbol.svg" alt="quote icon" />
            <div className='flex gap-2'>
              <img src="clock.svg" className='w-[20px] h-[20px]' alt="clock icon" />
              <p className='text-xs lg:text-sm'><span>4 </span>mins read</p>
            </div>
          </div>
          <p className='text-xs lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>

          <p className='pt-6 text-sm lg:text-sm'><span className='text-2xl font-semibold'>60%</span>&nbsp; &nbsp;Daily time freed up.</p>
          <p className='bg-white/15 py-1 mt-2 px-3 uppercase text-xs w-fit h-fit rounded-full'>Core HR</p>

          <div className='flex items-center gap-4 mt-6'>
            <img src="/profile1.png" alt="testimonial person image" />
            <div className=''>
              <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base'>Ismael Mustafa</p>
                <p className='text-white/60 text-xs italic'>HR Manager</p>
              </div>
              <p className='text-white/60 text-xs capitalize lg:text-sm'>nims school, Dubai</p>
            </div>
          </div>
        </div>

        <div className='lg:min-w-[410px] min-w-[280px] bg-[#1c1d21] text-white p-4 rounded-2xl'>
          <div className='flex justify-between items-center mb-4'>
            <img className='w-[48px] ' src="/quote-symbol.svg" alt="quote icon" />
            <div className='flex gap-2'>
              <img src="clock.svg" className='w-[20px] h-[20px]' alt="clock icon" />
              <p className='text-xs lg:text-sm'><span>4 </span>mins read</p>
            </div>
          </div>
          <p className='text-xs lg:text-base'>Say goodbye to repetitive manual work and access all HR features anytime, anywhere.</p>

          <p className='pt-6 text-sm lg:text-sm'><span className='text-2xl font-semibold'>60%</span>&nbsp; &nbsp;Daily time freed up.</p>
          <p className='bg-white/15 py-1 mt-2 px-3 uppercase text-xs w-fit h-fit rounded-full'>Core HR</p>

          <div className='flex items-center gap-4 mt-6'>
            <img src="/profile1.png" alt="testimonial person image" />
            <div className=''>
              <div className='flex gap-4 items-center'>
                <p className='text-sm lg:text-base'>Ismael Mustafa</p>
                <p className='text-white/60 text-xs italic'>HR Manager</p>
              </div>
              <p className='text-white/60 text-xs capitalize lg:text-sm'>nims school, Dubai</p>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:hidden flex justify-center py-4'>
        <Button variant="outline">See All Stories</Button>
      </div>

    </section>
  )
}

export default SuccessStories