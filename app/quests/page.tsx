 'use client';

import React, { useRef } from 'react'
import NavbarSection from './_components/NavbarSection'
import Link from 'next/link'
import FristSection from './_components/FristSection';
import { Spotlight } from '@/components/ui/Spotlight';

const page = () => {

  
  return (
    
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
    <NavbarSection />
    <Spotlight className="left-80 top-[-900px]  md:flex " fill="white" />
    <div className="p-4 mx-auto w-full pt-10 md:pt-24 px-2">
      <div className="text-4xl pb-5 md:text-7xl px-5 text-center bg-gradient-to-b bg-clip-text text-transparent from-neutral-50  bg-neutral-400 bg-opacity-50">
        Create, grow, and <br /> scale your business
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Custom tailored solutions for your business,we are a team of creatives who excited to help you grow your business.
      </p>
      <Link href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white ">
        Book a calls
      </Link>

      <div className="w-full pt-20">
        <FristSection />
       
      </div>

      





    </div>

  </div>

    
  )
}

export default page