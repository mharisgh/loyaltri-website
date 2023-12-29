import React from 'react'

const ErrorPage = () => {
  return (
    <div>
      <div className='flex justify-center items-center flex-col w-full h-screen gap-4'>
        <img src="/error-loyaltri.webp" className='w-[300px]' alt="error logo" />
        <p className='bg-[#e1dbfe] px-4 py-2 font-semibold rounded-xl'>404 error</p>
        <p className='font-semibold text-3xl lg:text-4xl '>Page is under maintenance</p>
        <p className=''>Sorry, the page you are looking for doesn’t exist or has been moved.</p>
        <div className='flex gap-4 flex-col lg:flex-row'>
          <button className=' px-4 py-2 rounded-full cursor-pointer shadow-xl border border-purple-200 font-semibold'>Go back</button>
          <a href="mailto:sales@loyaltri.com">
            <button className='bg-[#261752] text-white cursor-pointer px-4 py-2 rounded-full shadow-xl border border-purple-200 font-semibold'>Contact us</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage