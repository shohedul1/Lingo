'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const FiveSection = () => {
    return (
        <div className="md:flex md:space-x-20 py-20 items-center justify-center bg-black ">
            <div className="space-y-6 flex-col text-gray-200 px-10">
                <div className="text-xl">STREMLTRE YOUR WORK AND PROCESSES</div>
                <div className="text-xl">Prioritize reverue-driving work</div>
                <div className="text-xl">Connect what needs to get done, who is responsible, and how to get it done.</div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger
                            className="text-yellow-500 border-none"
                        >
                            Automate your workflows
                        </AccordionTrigger>
                        <AccordionContent className="border-b border-yellow-500">
                            Put tasks an autopitot like assingeing work,setting dee dates, and mone
                            <div className="flex text-yellow-500 pt-4">
                                <div className="text-lg"> Get Starte</div>
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" >
                        <AccordionTrigger
                            className="text-rose-400"
                        >
                            Automate your workflows
                        </AccordionTrigger>
                        <AccordionContent className="border-b border-rose-500" >
                            Put tasks an autopitot like assingeing work,setting dee dates, and mone
                            <div className="flex text-rose-400 pt-4">
                                <div className="text-lg"> Get Starte</div>
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" >
                        <AccordionTrigger
                            className="text-blue-400"
                        >
                            Automate your workflows
                        </AccordionTrigger>
                        <AccordionContent className="border-b border-blue-500">
                            Put tasks an autopitot like assingeing work,setting dee dates, and mone
                            <div className="flex text-blue-400 pt-4">
                                <div className="text-lg"> Get Starte</div>
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" >
                        <AccordionTrigger
                            className="border-red-200"
                        >
                            Automate your workflows
                        </AccordionTrigger>
                        <AccordionContent className="border-b border-red-200">
                            Put tasks an autopitot like assingeing work,setting dee dates, and mone
                            <div className="flex text-red-200 pt-4">
                                <div className="text-lg"> Get Starte</div>
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" >
                        <AccordionTrigger
                            className="text-green-400"
                        >
                            Automate your workflows
                        </AccordionTrigger>
                        <AccordionContent className="border-b border-green-500">
                            Put tasks an autopitot like assingeing work,setting dee dates, and mone
                            <div className="flex text-green-400 pt-4">
                                <div className="text-lg"> Get Starte</div>
                                <ArrowRight className="w-6 h-6 ml-4" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="px-10 mt-20">
                <Image src={'/home.webp'} alt="image" width={500} height={500} property="true"
                />
            </div>



        </div>
    )
}

export default FiveSection;