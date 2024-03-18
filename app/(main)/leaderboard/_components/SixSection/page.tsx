'use client';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';


const SixSection = () => {
    return (
        <div className='px-10 py-10 bg-[#d0eaba]'>
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <Image src={'/slider/logo1.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo2.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo3.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo4.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo5.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo6.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo7.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo8.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo9.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo10.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo11.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo12.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo13.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo14.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo15.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo16.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo17.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo18.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>
                <Slider.Slide>
                    <Image src={'/slider/logo19.svg'} width={100} height={100} alt="image" className='w-20 h-20' property='true' />
                </Slider.Slide>

            </Slider>
        </div>
    )
}

export default SixSection;