
'use client';
import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import DropDownMenu from './DropDownMenu';


interface NavbarProps {
    scrollToWebsiteDesign: ()=> void;
    scrollToGraphicDesign: ()=> void;
    scrollToshopifyStoresDesign: ()=> void;
    scrollToBrandsDesing: ()=> void;
}


const NavbarSection:React.FC<NavbarProps> = ({scrollToWebsiteDesign, scrollToGraphicDesign, scrollToshopifyStoresDesign, scrollToBrandsDesing}) => {
    const [isDropDownVisible, setDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setDropDownVisible(false);
    }

    return (
        <div>
            <div className='p-6 md:p-8 flex items-center justify-between z-50'>
                <div>
                    <Link className='cursor-pointer' href={"/"}>
                        <Image
                            priority
                            src={"/logo/logo.svg"}
                            alt='Logo'
                            width={100}
                            height={100}
                            className='w-10 h-10 md:w-14 md:h-14'
                        />
                    </Link>

                </div>

                <div className='cursor-pointer hidden lg:flex space-x-10 items-center text-slate-300 text-center 
                bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 bg-neutral-400 bg-opacity-50'>
                    <div onClick={scrollToWebsiteDesign} className='hover:text-gray-50'>Website Design</div>
                    <div onClick={scrollToGraphicDesign} className='hover:text-gray-50'>Graphic Design</div>
                    <div onClick={scrollToshopifyStoresDesign} className='hover:text-gray-50'>Shopity Design</div>
                    <div onClick={scrollToBrandsDesing} className='hover:text-gray-50'> Brands</div>
                    <Link href={'/pricing'} className='hover:text-gray-50'>
                        Pricing
                    </Link>
                </div>

                <div className='hidden md:flex'>
                    <Link href={"/contact"} className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                        Contact
                    </Link>
                </div>

                <div className='flex md:hidden'>
                    {isDropDownVisible ? (
                        <div
                            onClick={toggleDropDown}
                            className='w-8 h-8 text-slate-300 cursor-pointer'>
                            <X />
                            <DropDownMenu onClose={closeDropDown} />
                        </div>
                    ) : (
                        <AlignJustify
                            onClick={toggleDropDown}
                            className='w-8 h-8 text-slate-300 cursor-pointer'
                        />
                    )}

                </div>

            </div>

        </div>
    )
}

export default NavbarSection;
