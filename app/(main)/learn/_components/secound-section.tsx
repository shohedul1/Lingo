import { cn } from '@/lib/utils';
import { Lora } from 'next/font/google';
import Image from 'next/image'
import React from 'react';
const font = Lora({
    subsets: ['latin'],
    weight: ['400'],
});


const SecoundSection = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 bg-[#b5d4c0]'>
            <h1 className='text-center text-5xl font-bold'>Consolidate tools.Cut costs.</h1>
            <Image src={'/logo.png'} alt='image' width={1000} height={1000} className="pt-10 w-4/5 xl:w-1/3" />
            <div className={cn(font.className, 'flex items-center justify-center text-2xl xl:text-3xl pt-10 pb-4 xl:py-10 px-8 text-center w-4/5')}>
                &quot;We got rid of nearly a dozen different tools because of what Notion does for us.&quot;
            </div>

            <div className='flex items-center justify-center flex-col'>
                <Image src={'/logo2.webp'} alt="image" width={1000} height={1000}
                    className="pt-2 xl:pt-0 w-20 xl:w-24" />
                <div className="text-center">
                    <div className=" font-medium pt-4">Justin Watt</div>
                    <div className="">Director of Ops & Marketing, MetaLab</div>
                </div>

            </div>

        </div>
    )
}

export default SecoundSection