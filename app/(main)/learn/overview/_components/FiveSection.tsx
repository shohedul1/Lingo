import Image from 'next/image'
import React from 'react'

const FiveSection = () => {
    return (
        <div className='md:py-20 py-0 space-y-20 items-center justify-center bg-[#68787d]'>
            <div className='text-4xl text-center'>The best platform for cross team work</div>
            <div className='md:flex md:space-x-10 items-center px-10 justify-center'>
                <div className='flex items-center justify-center py-6 md:w-1/2'>
                    <div className='text-4xl flex md:space-y-10 flex-col'>
                        <div className='flex-col'>
                           The best platform for cross-team work
                        </div>
                        <div className='text-2xl'>
                            Get more work done across teams with unlimited monthly actions,the ability to track hundreds of projects in one place,and reporting against your entire organization
                        </div>
                       
                    </div>
                </div>
                <div className='bg-gradient-to-r from-gray-400 items-center justify-center rounded-md flex p-10'>
                    <Image
                        src={'/image/tabs1.webp'}
                        width={530}
                        height={530}
                        alt='logo'
                        className='rounded-md w-80 h-60'

                    />
                </div>
            </div>
        </div>
    )
}

export default FiveSection