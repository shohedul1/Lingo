import Image from 'next/image';
import React from 'react'

const FirstSection = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-red-50 py-10  items-center justify-center px-5 '>
            <div className='flex-col flex  lg:mt-[-100px] gap-5 pb-10 md:pb-0 items-center justify-center'>
                <div className='text-6xl text-center'>
                    The #1 Sofware in Product and Project Management
                </div>
                <div className='text-2xl text-center'>
                    Bird connects Company-wide goals to the work needed to achieve them--across teams and functions
                </div>
                
            </div>
            <Image src={'/image/tabs5.webp'} width={700} height={700} alt='image' property='true'/>
        </div>
    )
}

export default FirstSection;