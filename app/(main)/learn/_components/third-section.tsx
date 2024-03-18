'use client';
import Image from "next/image";
import { useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { TbSwimming, TbSwitch, TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
    subsets: ['latin'],
    weight: ['400'],
})

const tabs = [
    {
        icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600" />,
        header: 'Visualize , filter & sory any way you want',
        subheading: 'Show only tasks assingned to you , or  items marked as urgent. Break donw any project in the is more helpful to you',
        images: [
            { title: 'Board', picture: '/image1.png' },
            { title: 'Table', picture: '/image2.png' },
            { title: 'Timeline', picture: '/image3.png' },
            { title: 'Calendar', picture: '/image4.png' },
            { title: 'Gallery', picture: '/image5.png' },

        ],

        description: 'Choose from a veriety of colors'
    },
   
   
]

type Tab = {
    icon: JSX.Element,
    header: string,
    subheading: string,
    images?: { title: string, picture: string }[],
    description?: string,
    image?: string,
}

const ThirdSection = () => {
    const ref = useRef(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    return (
        <div className="flex flex-col py-10 items-center justify-center bg-[#413737]">
            <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex text-[#ecd6d6] py-5">
                Powerfull building blocks
            </div>
            <div className="mx-auto w-full xl:w-[1000px] px-5  xl:px-0">
                {tabs.map((tab, index) => (
                    <div key={index}
                        className={`${index === 0 ? 'xl:col-span-4 xl:row-span-3 md:col-span-2 flex-col' :
                            'xl:col-span-2 xl:row-span-3 flex-col'
                            } bg-[#f6d2ae] p-6 rounded-xl flex`}
                    >
                        <div className="flex flex-col">
                            {tab.icon}
                            <div className="text-lg font-medium mt-2">{tab.header}</div>
                            <div className="mt-2">{tab.subheading}</div>
                        </div>

                        <>
                            {index === 0 && tab.images && (
                                <div>
                                    <Image
                                        src={tab.images[activeImageIndex].picture}
                                        alt="image"
                                        width={500}
                                        height={500}
                                        className="flex justify-center my-10 xl:my-16 rounded-xl mx-auto"
                                    />

                                    <div className="grid grid-cols-3 lg:grid-cols-5  xl:w-1/2 mx-auto gap-2 xl:space-x-2 ">
                                        {tab.images.map((image, index) => (
                                            <div key={index}
                                                onClick={() => setActiveImageIndex(index)}
                                                className={`${index === activeImageIndex ? 'rounded-md bg-[#e08989] items-center justify-center flex p-1' :
                                                    'rounded-md  items-center justify-center bg-[#f6f5f4] flex hover:bg-[#eae7e7e]  '
                                                    }`}
                                            >
                                                <div className="">
                                                    {image.title}
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </>

                   

                    </div>
                ))}

            </div>
            <div className={cn(font.className, 'flex items-center text-[#b0afaf] justify-center text-2xl xl:text-3xl pt-10 pb-4 xl:py-10 px-8 text-center w-4/5 xl:w-2/5')}>
                &quot;Dev.SP adapts to your needs.It is as minimal or as powerful as you need it to be.&quot;
            </div>
            <div className="items-center flex justify-center flex-col">
                <Image src={'/match-group.webp'} alt="image" width={1000} height={1000}
                    className="pt-2 xl:pt-0 w-20 xl:w-24" />
                <div className="text-center text-[#89efed]">
                    <div className=" font-medium pt-4">Rahim Makani</div>
                    <div className="">Director of Product, Matchgroup</div>
                </div>
            </div>

        </div>
    )
}

export default ThirdSection