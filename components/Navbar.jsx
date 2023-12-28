import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
    <nav className='mx-auto fixed w-full lg:mt-4 z-[100]'>
      <div className='flex lg:gap-x-14  items-center backdrop-blur-xl lg:shadow-lg bg-white/50 lg:border border-black/10 lg:w-fit justify-between mx-auto px-4 lg:px-8 py-2 lg:rounded-full '>
        <div className='font-bold'>Loyaltri</div>
        <ul className='lg:flex gap-x-4 hidden'>
          <li>Company</li>
          <li>Products</li>
          <li>Resources</li>
          <li>Community</li>
          <li>Pricing</li>
        </ul>
        <div className='hidden lg:flex items-center gap-x-2'>
          <Button variant="outline">Login</Button>
          <Button variant="outline">Schedule a Demo</Button>
        </div>
        <Link className='lg:hidden' href='#'><Image src='/icons/menu.svg' width={30} height={30} /></Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar