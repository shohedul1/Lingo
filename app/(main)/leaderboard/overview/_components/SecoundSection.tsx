

import Feature1 from '@/public/assets/feature-1.svg';
import Feature2 from '@/public/assets/feature-2.svg';
import Feature3 from '@/public/assets/feature-3.svg';
import Check from '@/public/assets/check.svg';
import bluebutton from '@/public/assets/blue-button.svg';
import greenButton from '@/public/assets/green-button.svg';
import pinkButton from '@/public/assets/pink-button.svg';



import Image from 'next/image';




export default function SecoundSection() {
  return (
    <div className='flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] px-10 bg-[#4e0e0e]'>
        <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
            <Image src={Feature1} alt='Feature 1 image' className='hidden w-1/2 sm:block'/>
            <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                <h3 className='font-medium text-[#0085FF] lg:text-[18px]'>Sales  Monitorign</h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#f3faff] lg:text-[42px] lg:leading-[58px]'>Simplify your sales monitoring</h1>
                <Image src={Feature1} alt='feature 1 image' className='pt-[24px] sm:hidden'/>
                <p className='py-[24px] text-[#eef6ff] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a  bird&apos;s eye view with our costomizable</p>
                 <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                    <li className='flex items-center gap-x-2 text-[#c09e55]'>
                        <span><Image src={Check} alt='Checkmark'/></span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center gap-x-2 text-[#4fec99]'>
                        <span><Image src={Check} alt='Checkmark'/></span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center gap-x-2 text-[#5af7a8]'>
                        <span><Image src={Check} alt='Checkmark'/></span>
                        Lorem ipsum dolor sit amet
                    </li>
                 </ul>
            </div>
        </div>


        <div className='flex flex-col gap-x-6 sm:flex-row'>
            <Image src={Feature2} alt='Feature 1 image' className='hidden w-1/2 sm:block'/>
            <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
                <h3 className='font-medium text-[#00A424] lg:text-[18px]'>Customer Support</h3>
                <h1 className='pt-[12px] text-white text-2xl font-medium lg:text-[42px] lg:leading-[58px]'>Get in touch with your customers</h1>
                <Image src={Feature2} alt='feature 1 image' className='pt-[24px] sm:hidden'/>
                <p className='py-[24px] text-white lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a  bird&apos;s eye view with our costomizable dashboard.</p>
                 <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                    <li className='flex items-center gap-x-2 text-[#5cda4c]'>
                        <span><Image src={Check} alt='Checkmark'/></span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center gap-x-2 text-[#6cd662]'>
                        <span><Image src={Check} alt='Checkmark'/></span>
                        Lorem ipsum dolor sit amet
                    </li>
                    <li className='flex items-center gap-x-2 text-[#63d761]'>
                        <span><Image src={Check} alt='Checkmark'/></span>
                        Lorem ipsum dolor sit amet
                    </li>
                 </ul>
                
            </div>
        </div>

        <div className='flex flex-col gap-x-6 sm:flex-row-reverse'>
            <Image src={Feature3} alt='Feature 1 image' className='hidden w-1/2 sm:block'/>
            <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
                <h3 className='font-medium text-[#EB2891] lg:text-[18px]'>Growth Monitoring</h3>
                <h1 className='pt-[12px] text-2xl font-medium text-[#ffffff] lg:text-[42px] lg:leading-[58px]'>Monitor your site&apos;s new subcribers</h1>
                <Image src={Feature3} alt='feature 1 image' className='pt-[24px] sm:hidden'/>
                <p className='py-[24px] text-[#e9f3ff] lg:text-[18px]'>Stay on top of things and revamp your work process with our game-changing feature. Get a  bird&apos;s eye view with our costomizable</p>
                
                 <div className='flex w-full gap-x-[24px]'>
                    <div className='w-1/2 flex-col gap-y-3'>
                        <h3 className='text-[20px] font-medium text-[#ad62ea]'>100+</h3>
                        <p className='text-[#8a6ae3]'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='w-1/2 flex-col gap-y-3'>
                        <h3 className='text-[20px] font-medium text-[#172026]'>800+</h3>
                        <p className='text-[#cd7df8]'>Conse adipiscing elit</p>

                    </div>
                 </div>
                
            </div>
        </div>
        
    </div>
  )
}