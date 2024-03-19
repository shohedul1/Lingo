'use client';
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const options = [
    {
        index: 0,
        title: 'Marketing',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Markting',
        image: '/image/tabs1.webp',
    },
    {
        index: 1,
        title: 'Operations',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Operations',
        image: '/image/tabs2.webp',
    },
    {
        index: 2,
        title: 'IT',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore IT',
        image: '/image/tabs3.webp',
    },
    {
        index: 3,
        title: 'Product',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Product',
        image: '/image/tabs4.webp',
    },
    {
        index: 4,
        title: 'Sales',
        descriptions: 'Plan and execute your campaigns with Timeline view.Align your team on top priorities and deliver fast results.',
        action: 'Explore Sales',
        image: '/image/tabs1.webp',
    }
]


const ThirdSection = () => {
    return (
        <div className=" items-center justify-center flex flex-col py-20 bg-[#4b3f1111]">
            <div className="text-4xl text-center">Built to support any team and workflow</div>
            <div className="flex items-center justify-center px-5">
                <div className="w-full">
                    {
                        options.map((option, index) => (
                            <Accordion type="single" defaultValue="Marketing" key={index} >
                                <AccordionItem key={index} value={option.title}>
                                    <AccordionTrigger className="text-3xl">{option.title}</AccordionTrigger>
                                    <AccordionContent className="border-b border-blue-500">
                                        <div className="flex flex-col md:flex-row items-center">
                                            <div className="flex flex-col">
                                                <div className="text-lg mt-4">{option.descriptions}</div>
                                                <div className="flex text-blue-400">
                                                    <div className="text-lg">{option.action}</div>
                                                    <ArrowRight className="h-6 w-6 ml-4"/>
                                                </div>
                                            </div>
                                                <Image src={option.image} alt="image" width={500} height={500}/>
                                           
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                        ))
                    }

                </div>
             

               
            </div>
        </div>
    )
}

export default ThirdSection;