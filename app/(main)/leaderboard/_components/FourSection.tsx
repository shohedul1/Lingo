'use client';
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const FourSection = () => {
    const router = useRouter();
    const handleClick = ()=>{
         router.push('/leaderboard/overview');
    }
    return (
        <div className='flex flex-col bg-[#c0bfbf] py-20'>
            <div className='flex flex-col gap-2 items-center justify-center text-center md:justify-start md:text-start md:items-start md:px-10'>
                <p className='text-2xl font-medium'> DRIVE EFFICIENCY ADROSS TEAME</p>
                <h1 className='text-5xl font-bold'>Mange Complex work Easily</h1>
                <p className='text-[18px] font-bold'>Connect what needs to get done.who is responsive and how to get it done.</p>
            </div>
            <div className='flex flex-col gap-2 md:flex-row md:px-10 px-5 justify-between '>
                <div className='bg-[#da7c7c]  w-full p-2 border border-red-50 rounded-md'>
                <Image src={'/home2.webp'} width={700} height={700} alt="image" />
                </div>
                <div className='bg-[#3f3d3d] w-full p-5 '>
                    <h1 className='text-5xl font-bold text-white'>Timeline</h1>
                    <p className='text-2xl font-bold text-[#f1e1e1] pt-10'>Connect strategic goals to the teams that help achieve them. See progress in real time, update stakeholders, and keep the company on track.</p>
                    <div className="flex items-center border-b pt-20">
                        
                            <Button onClick={handleClick}>
                                 Get Started 
                                 <ArrowRight className="w-6 h-6" />
                            </Button>
                         
                            
                        </div>
                </div>

            </div>
        </div>
    )
}

export default FourSection