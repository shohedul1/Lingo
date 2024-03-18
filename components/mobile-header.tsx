import React from 'react'
import { MobileSidebar } from './mobile-sidebar'
import Link from 'next/link'

const MobileHeader = () => {
    return (
        <nav className='lg:hidden px-6 h-[50px] justify-between flex items-center bg-green-500 border-b fixed top-0 w-full z-50'>
            <MobileSidebar/>
           <h1 className='text-5xl font-bold text-[#daffbc]'>Web.Sp</h1> 
        </nav>
    )
}

export default MobileHeader 