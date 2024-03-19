
import Image from "next/image";
import Greadien from '@/public/assets/Gradient.svg';
import HeroImage from '@/public/assets/Image.svg';
import Google from '@/public/assets/Google.svg';
import Slack from '@/public/assets/Slack.svg';
import Truspilot from '@/public/assets/Trustpilot.svg';
import Cluth from '@/public/assets/Clutch.svg';
import Cnn from '@/public/assets/CNN.svg';






export default function FirstSection() {
  return (
    <div className="bg-[#f2c6f4] pt-10">
        <div className='px-[20px] lg:px-[280px] '>
            <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]'>Start monitoring your website like a pro</h1>
             <p className='text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7'>
                Get a bird&apos;s eye view with our customizable dishboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
             </p>
            
        </div>

        <div className="relative flex h-full w-full justify-center">
            <Image  src={Greadien} alt="Gradient" className="min-h-[500px] w-full object-cover lg:h-auto"/>

            <div className="absolute bottom-5 flex w-full flex-col items-center">
                <Image src={HeroImage} alt="hero image" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"/>

                <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                    <p className="text-[#FFFFFF] text-center lg:text-[18px]">Trusted by these companies</p>
                    <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                        <Image src={Google} alt="google"/>
                        <Image src={Slack} alt="slack"/>
                        <Image src={Truspilot} alt="truspilot"/>
                        <Image src={Cnn} alt="cnn"/>
                        <Image src={Cluth} alt="cluth"/>

                    </div>
                </div>
            </div>

        </div>
       
        
    </div>
  )
}