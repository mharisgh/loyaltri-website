import React from 'react'
import Image from 'next/image'

const FeatureAccordian = () => {
  return (
    <div>
      {/* Core hr tag*/}
      <div className='lg:mx-12 flex w-full items-center justify-center lg:justify-start'>
        <div className={`flex gap-2 h-fit w-fit py-2 px-4 rounded-full justify-center items-center bg-black/10 mb-4 `}>

          <Image
            src='/onboard2.svg' width={16} height={16} alt='loyaltri title icon' />
          <p className='text-xs font-semibold uppercase'>Core HR</p>
        </div>
      </div>

      {/* core HR - Desktop */}
      <div className='flex flex-col-reverse lg:flex-row bg-red-300 lg:mx-8 p-6 lg:p-0  mb-10'>

        {/* content */}
        <div className='lg:w-1/2 flex flex-col gap-4 '>
          <div className='flex  items-center lg:max-w-[80%] bg-green-200 p-4 rounded-xl'>
           
            <div>
              <div>
                <h2 className='text-2xl font-semibold'>Attendance Tracking</h2>
              </div>
              <p className='text-xs lg:text-base pt-4 max-w-[90%]'>Use geofencing to clock-in and out of shifts accurately without a time clock.</p>
            </div>
            
            <div>
              <p className='text-3xl'>&gt;</p>
            </div>

          </div>

          <div className='flex justify-between  items-center lg:max-w-[80%] bg-green-200 p-4 rounded-xl'>
           
            <div>
              <div>
                <h2 className='text-2xl font-semibold'>Attendance Tracking</h2>
              </div>
              <p className='hidden text-xs lg:text-base pt-4 max-w-[90%]'>Use geofencing to clock-in and out of shifts accurately without a time clock.</p>
            </div>
            
            <div>
              <p className='text-3xl'>&gt;</p>
            </div>

          </div>

          <div className='flex justify-between  items-center lg:max-w-[80%] bg-green-200 p-4 rounded-xl'>
           
            <div>
              <div>
                <h2 className='text-2xl font-semibold'>Attendance Tracking</h2>
              </div>
              <p className='hidden text-xs lg:text-base pt-4 max-w-[90%]'>Use geofencing to clock-in and out of shifts accurately without a time clock.</p>
            </div>
            
            <div>
              <p className='text-3xl'>&gt;</p>
            </div>

          </div>

          <div className='flex justify-between items-center lg:max-w-[80%] bg-green-200 p-4 rounded-xl'>
           
            <div>
              <div>
                <h2 className='text-2xl font-semibold'>Attendance Tracking</h2>
              </div>
              <p className='hidden text-xs lg:text-base pt-4 max-w-[90%]'>Use geofencing to clock-in and out of shifts accurately without a time clock.</p>
            </div>
            
            <div>
              <p className='text-3xl'>&gt;</p>
            </div>

          </div>

          
        </div>

        {/* image */}
        <div className='lg:w-1/2'>
          <div className='relative w-full lg:h-[440px] h-[300px] bg-gray-600'>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeatureAccordian;