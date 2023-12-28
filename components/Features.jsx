import React from 'react'
import HeadingDesc from './HeadingDesc'
import Image from 'next/image'
import FeatureAccordian from './FeaturesCorehr'
import { Button } from "@/components/ui/button"



const Features = () => {
  return (
    <section className='max-w-screen-2xl mx-auto '>
      {/* Heading */}
      <div className='py-10 px-4 lg:px-8'>
        <HeadingDesc
          badgeText={'Features'}
          // badgeImg={'/card-icon-1.svg'}
          badgeBgColor={'#94f4f5'}
          title={'Features only for you business'}
          desc={'Here are several features we provide to you to make the greatest HRM system for your business.'}
          itemsLayout={'items-end'}
          textLayout={'items-center'}
        />
      </div>

      {/* card 1 */}
      <div className='flex flex-col-reverse lg:flex-row  bg-gradient-to-b from-[#eae4ff] via-[#f2e6f2] to-[#faf3f6] lg:mx-8  p-6 lg:p-8 gap-10 lg:gap-0 rounded-2xl mb-10'>

        {/* content */}
        <div className='lg:w-1/2 flex flex-col '>

          <div className='lg:w-[80%] flex flex-col gap-2'>
            {/* heading & desc with bullet points */}
            <HeadingDesc
              badgeText={'Recruitment'}
              badgeImg={'/onboard2.svg'}
              badgeBgColor={'#fff'}
              title={'Onboard in 60 secs'}
              desc={'Say goodbye to paperwork with our digitized onboarding solution. Automatically generate and e-sign offer letters, HR forms and NDAs through our mobile-friendly portal.'}
              itemsLayout={'lg:items-start'}
              textLayout={'lg:text-left'}
            />

            {/* bullet points */}
            <div className='py-8 flex flex-col gap-4'>
              <div className='flex items-center gap-4  '>
                <div className='relative bg-[#6a4bfc] rounded-full min-h-[16px] min-w-[16px] flex justify-center items-center '>
                  <Image className='' src='/check.svg' width={20} height={20} alt='bullet points' />
                </div>

                <p className='text-sm'>Paperwork on any device in under 2 minutes.</p>
              </div>

              <div className='flex items-center gap-4  '>
                <div className='relative bg-[#6a4bfc] rounded-full min-h-[16px] min-w-[16px] flex justify-center items-center  '>
                  <Image className='' src='/check.svg' width={20} height={20} alt='bullet points' />
                </div>

                <p className='text-sm'>Simple and intuitive interface, Fastest time to productivity.</p>
              </div>



            </div>

            {/* testimonial */}
            <div className='flex lg:flex-row flex-col gap-4'>
              <div className='lg:w-[4px] w-full h-[3px] lg:h-[100px] bg-[#795cff]'></div>

              <div>
                <p className='text-black/70 text-xs lg:text-sm w-fit'>"Onboarding a new employee used to take us hours, now it's just a minute. We can start them working immediately."</p>

                <div className='flex flex-col lg:flex-row justify-between pt-4 lg:items-center'>

                  <div className='flex gap-4 items-center'>
                    <div className='w-[40px] h-[40px] object-cover rounded-full overflow-hidden'>
                      <Image src='/nims.webp' width={300} height={300} alt={'nims hr manager testimonial'} />
                    </div>

                    <div>
                      <p className='font-semibold'>Ahmed Kabeer</p>
                      <p className='text-xs'>Human Resource Manager, <span className='font-semibold'>NIMS, Dubai</span></p>
                    </div>
                  </div>

                  <div className='hidden lg:block w-[1px] h-[40px] bg-black/20'></div>

                  <Image className='hidden lg:block' src='/nims.png' width={140} height={200} alt={'testimonial company logo'} />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* image */}
        <div className='lg:w-1/2'>
          <div className='relative w-full lg:h-[440px] h-[300px]'>
            <Image className='h-full mix-blend-darken w-full object-contain' src='/onboard.png' width={100} quality={100} height={100} alt={'features image'} />
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className='flex flex-col-reverse lg:flex-row-reverse  bg-gradient-to-b from-[#eaf3fd] via-[#e6edf3] to-[#ebfaf9] lg:mx-8  p-6 lg:p-8 gap-10 lg:gap-0 rounded-2xl mb-10'>

        {/* content */}
        <div className='lg:w-1/2 flex flex-col '>

          <div className='lg:w-[80%] flex flex-col gap-2'>
            {/* heading & desc with bullet points */}
            <HeadingDesc
              badgeText={'Recruitment'}
              badgeImg={'/onboard2.svg'}
              badgeBgColor={'#fff'}
              title={'Onboard in 60 secs'}
              desc={'Say goodbye to paperwork with our digitized onboarding solution. Automatically generate and e-sign offer letters, HR forms and NDAs through our mobile-friendly portal.'}
              itemsLayout={'lg:items-start'}
              textLayout={'lg:text-left'}
            />

            {/* bullet points */}
            <div className='py-8 flex flex-col gap-4'>
              <div className='flex items-center gap-4  '>
                <div className='relative bg-[#6a4bfc] rounded-full min-h-[16px] min-w-[16px] flex justify-center items-center '>
                  <Image className='' src='/check.svg' width={20} height={20} alt='bullet points' />
                </div>

                <p className='text-sm'>Paperwork on any device in under 2 minutes.</p>
              </div>

              <div className='flex items-center gap-4  '>
                <div className='relative bg-[#6a4bfc] rounded-full min-h-[16px] min-w-[16px] flex justify-center items-center  '>
                  <Image className='' src='/check.svg' width={20} height={20} alt='bullet points' />
                </div>

                <p className='text-sm'>Simple and intuitive interface, Fastest time to productivity.</p>
              </div>



            </div>

            {/* testimonial */}
            <div className='flex lg:flex-row flex-col gap-4'>
              <div className='lg:w-[4px] w-full h-[3px] lg:h-[100px] bg-[#795cff]'></div>

              <div>
                <p className='text-black/70 text-xs lg:text-sm w-fit'>"Onboarding a new employee used to take us hours, now it's just a minute. We can start them working immediately."</p>

                <div className='flex flex-col lg:flex-row justify-between pt-4 lg:items-center'>

                  <div className='flex gap-4 items-center'>
                    <div className='w-[40px] h-[40px] object-cover rounded-full overflow-hidden'>
                      <Image src='/nims.webp' width={300} height={300} alt={'nims hr manager testimonial'} />
                    </div>

                    <div>
                      <p className='font-semibold'>Ahmed Kabeer</p>
                      <p className='text-xs'>Human Resource Manager, <span className='font-semibold'>NIMS, Dubai</span></p>
                    </div>
                  </div>

                  <div className='hidden lg:block w-[1px] h-[40px] bg-black/20'></div>

                  <Image className='hidden lg:block' src='/nims.png' width={140} height={200} alt={'testimonial company logo'} />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* image */}
        <div className='lg:w-1/2'>
          <div className='relative w-full lg:h-[440px] h-[300px]'>
            <Image className='h-full mix-blend-darken w-full object-contain' src='/onboard.png' width={100} height={100} alt={'features image'} />
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className='flex flex-col-reverse lg:flex-row  bg-gradient-to-b from-[#eae4ff] via-[#f2e6f2] to-[#faf3f6] lg:mx-8  p-6 lg:p-8 gap-10 lg:gap-0 rounded-2xl mb-10'>

        {/* content */}
        <div className='lg:w-1/2 flex flex-col '>

          <div className='lg:w-[80%] flex flex-col gap-2'>
            {/* heading & desc with bullet points */}
            <HeadingDesc
              badgeText={'Recruitment'}
              badgeImg={'/onboard2.svg'}
              badgeBgColor={'#fff'}
              title={'Onboard in 60 secs'}
              desc={'Say goodbye to paperwork with our digitized onboarding solution. Automatically generate and e-sign offer letters, HR forms and NDAs through our mobile-friendly portal.'}
              itemsLayout={'lg:items-start'}
              textLayout={'lg:text-left'}
            />

            {/* bullet points */}
            <div className='py-8 flex flex-col gap-4'>
              <div className='flex items-center gap-4  '>
                <div className='relative bg-[#6a4bfc] rounded-full min-h-[16px] min-w-[16px] flex justify-center items-center '>
                  <Image className='' src='/check.svg' width={20} height={20} alt='bullet points' />
                </div>

                <p className='text-sm'>Paperwork on any device in under 2 minutes.</p>
              </div>

              <div className='flex items-center gap-4  '>
                <div className='relative bg-[#6a4bfc] rounded-full min-h-[16px] min-w-[16px] flex justify-center items-center  '>
                  <Image className='' src='/check.svg' width={20} height={20} alt='bullet points' />
                </div>

                <p className='text-sm'>Simple and intuitive interface, Fastest time to productivity.</p>
              </div>



            </div>

            {/* testimonial */}
            <div className='flex lg:flex-row flex-col gap-4'>
              <div className='lg:w-[4px] w-full h-[3px] lg:h-[100px] bg-[#795cff]'></div>

              <div>
                <p className='text-black/70 text-xs lg:text-sm w-fit'>"Onboarding a new employee used to take us hours, now it's just a minute. We can start them working immediately."</p>

                <div className='flex flex-col lg:flex-row justify-between pt-4 lg:items-center'>

                  <div className='flex gap-4 items-center'>
                    <div className='w-[40px] h-[40px] object-cover rounded-full overflow-hidden'>
                      <Image src='/nims.webp' width={300} height={300} alt={'nims hr manager testimonial'} />
                    </div>

                    <div>
                      <p className='font-semibold'>Ahmed Kabeer</p>
                      <p className='text-xs'>Human Resource Manager, <span className='font-semibold'>NIMS, Dubai</span></p>
                    </div>
                  </div>

                  <div className='hidden lg:block w-[1px] h-[40px] bg-black/20'></div>

                  <Image className='hidden lg:block' src='/nims.png' width={140} height={200} alt={'testimonial company logo'} />
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* image */}
        <div className='lg:w-1/2'>
          <div className='relative w-full lg:h-[440px] h-[300px]'>
            <Image className='h-full mix-blend-darken w-full object-contain' src='/onboard.png' width={100} quality={100} height={100} alt={'features image'} />
          </div>
        </div>
      </div>

      <FeatureAccordian />

      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-x-4'>
          <Button variant="outline">See All Feaeetures</Button>
          <Button variant="outline">Interactive Product Tour</Button>
        </div>
      </div>

    </section>
  )
}

export default Features