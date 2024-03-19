import Image from 'next/image';
import React from 'react'

const FourSection = () => {
  return (
    <div className='md:py-20 py-10 space-y-20 items-center justify-center bg-[#7c8c91]'>
        <div className='text-4xl text-center'>Our customers are building a better world with Bird</div>
        <div className='md:flex md:space-x-10 items-center px-10 justify-center'>
            <div className='bg-gradient-to-r from-gray-400 items-center justify-center rounded-md flex p-10'>
                <Image 
                src={'/image/tabs1.webp'}
                width={530}
                height={530}
                alt='logo'
                className='rounded-md w-80 h-60'

                />
            </div>

            <div className='flex items-center justify-center py-6 md:w-1/2'>
                <div className='text-4xl flex md:space-y-10 flex-col'>
                    <div className='flex-col'>
                        Quickly Connect Complex work Across Teams
                    </div>
                    <div className='text-2xl'>
                        Decrease duplicate work and Increase cross-team visibitily by connecting work across teams and tools
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FourSection;