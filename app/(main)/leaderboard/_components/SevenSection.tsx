'use client';

import { ArrowRight } from "lucide-react";
import Image from "next/image";


const SevenSection = () => {
  return (
 
    <div className="flex flex-col py-10 bg-[#e5d3af] p-5" >
        <div className=" flex flex-col space-y-6 md:px-20">
            <div className="text-xl">Get started easity</div>
            <div className="text-4xl">Priorite Reveue-Driving Work</div>
            <div className="text-xl">Connect what needs to get done, who is responsive, and how to get it done.</div>
        </div>
        <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0 pt-10">
            <div className="rounded-sm bg-white p-8">
                <Image 
                src={'/home.webp'}
                width={500}
                height={500}
                alt="image"
                className="w-96"
                property="true"
                />
                <div className="text-3xl pt-8">Start with a templates</div>
                <div className="pt-10 flex justify-between">
                    <div className="text-xl">View templates</div>
                    <ArrowRight className="w-6 h-6 ml-4"/>
                </div>

            </div>
            <div className="rounded-sm bg-white p-8">
                <Image 
                src={'/home1.webp'}
                width={500}
                height={500}
                alt="image"
                className="w-96"
                property="true"
                />
                <div className="text-3xl pt-8">See Bird in acion</div>
                <div className="pt-10 flex justify-between">
                    <div className="text-xl">View demo</div>
                    <ArrowRight className="w-6 h-6 ml-4"/>
                </div>

            </div>
            <div className="rounded-sm bg-white p-8">
                <Image 
                src={'/home2.webp'}
                width={500}
                height={500}
                alt="image"
                className="w-96"
                property="true"
                />
                <div className="text-3xl pt-8">Talk with our sales team</div>
                <div className="pt-10 flex justify-between">
                    <div className="text-xl">contact Sales</div>
                    <ArrowRight className="w-6 h-6 ml-4"/>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default SevenSection;