'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

import { useMediaQuery } from 'react-responsive';

import { useState } from "react";
import { LiaRProject } from "react-icons/lia";
import { FaCalendarAlt } from "react-icons/fa";



import { PiArrowRight, PiBookOpenText, PiFileThin, PiSparkleLight } from "react-icons/pi";


const tabs = [
    {
        icon: (<PiBookOpenText className="text-3xl mr-2 text-purple-600 bg-purple-100 p-1 rounded" />),
        name: "AI",
        description: "Ask literally anything.",
        mone: (
            <div className="text-purple-600 flex items-center">
                Learn more <PiArrowRight className="text-sm ml-1" />
            </div>
        ),
        image: '/AI.jpg',
    },
    {
        icon: (<PiFileThin className="text-3xl mr-2 text-red-600 bg-red-100 p-1 rounded" />),
        name: "Docs",
        description: "Simple, powerful, beautiful. ",
        mone: (
            <div className="text-red-600 flex items-center">
                Learn more <PiArrowRight className="text-sm ml-1" />
            </div>
        ),
        image: '/Docs.png',
    },
    {
        icon: (<PiSparkleLight className="text-3xl mr-2 text-blue-600 bg-blue-100 p-1 rounded" />),
        name: "Wikis",
        description: "Centralize your knowledge.",
        mone: (
            <div className="text-blue-600 flex items-center">
                Learn more <PiArrowRight className="text-sm ml-1" />
            </div>
        ),
        image: '/Wikis.jpg',
    },
    {
        icon: (<LiaRProject className="text-3xl mr-2 text-yellow-600 bg-yellow-100 p-1 rounded" />),
        name: "Projects",
        description: "Manage complex projects without the chaos.",
        mone: (
            <div className="text-yellow-600 flex items-center">
                Learn more <PiArrowRight className="text-sm ml-1" />
            </div>
        ),
        image: '/project.jpg',
    },
    {
        icon: (<FaCalendarAlt className="text-3xl mr-2 text-green-600 bg-green-100 p-1 rounded" />),
        name: "Calendar",
        description: "New!Manage your time and projects, together.",
        mone: (
            <div className="text-green-600 flex items-center">
                Learn more <PiArrowRight className="text-sm ml-1" />
            </div>
        ),
        image: '/Calendar.jpg',
    }
]


const FristSection = () => {
    const [activeTab, setActioveTab] = useState(tabs[0]);

    const isSmallScreen = useMediaQuery({ maxWidth: 767 })
    return (
        <div className="md:items-center flex flex-col bg-red-50">
            <div className="font-medium 2xl:w-1/3 xl:w-1/2 md:w-2/3 lg:px-0 px-8 text-5xl xl:text-6xl flex justify-center xl:pt-14 text-center pt-6">
                Write, plan, share.<br /> With AI at your side.

            </div>

            <p className="text-2xl pt-4 text-center w-2/3 mx-auto">
                Notion is the connected workspace where better, faster work happens
            </p>

            <div className="flex gap-4 pt-6 items-center justify-center">
                <Link href={"#"}>
                    <Button variant={'primary'} size={'sm'}>
                        <div className="flex items-center justify-center">
                            Get Notion free
                            <div className="ml-2"><PiArrowRight /></div>
                        </div>
                    </Button>
                </Link>
                <Link href={"/#"}>
                    <Button variant={'secondary'} size={'sm'}>
                        <div className="flex items-center justify-center">
                            Request a demo
                            <div className="ml-2"><PiArrowRight /></div>
                        </div>

                    </Button>
                </Link>
            </div>

            <div className="pt-10 xl:pt-20 items-center justify-center">
                <Image
                    src={"/homehero.webp"}
                    alt="hero"
                    width={1000}
                    height={1000}
                    className="flex items-center justify-center mx-auto w-[700px] h-60"
                />
            </div>

            {isSmallScreen ? (
                <div className="px-8">
                    <div className="grid grid-cols-5 md:row-span-1 gap-4 xl:gap-6 mt-8 xl:px-0">
                        {
                            tabs.map((tab) => (
                                <motion.div
                                    key={tab.name}
                                    className={`flex p-1 md:p-8 cursor-pointer ${activeTab.name === tab.name ?
                                        "rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white border-gray-200 md:border items-center justify-center flex p-1" :
                                        "md:bg-[#f6f5f4] rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]"}`}
                                    onClick={() => setActioveTab(tab)}
                                >
                                    <div className="flex flex-col items-center md:justify-center">
                                        <div className="hidden md:flex text-4xl">{tab.icon}</div>
                                        <div className="font-medium text-sm xl:text-lg mt-1">{tab.name}</div>
                                    </div>

                                </motion.div>
                            ))
                        }
                    </div>

                    {/* content based on which tab is active */}
                    <div className=" p-12 w-full border border-red-400 mt-2">
                        {activeTab && (
                            <div className="flex justify-center items-center flex-col ">
                                <Image src={activeTab.image}
                                    alt={activeTab.name}
                                    width={500}
                                    height={500}
                                    className="w-[400px] rounded-xl  h-[300px]"
                                />

                            </div>
                        )}

                    </div>
                </div>
            ) : (
                <div className="flex xl:space-x-4 items-center justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
                    {tabs.map((tab) => (
                        <motion.div
                            key={tab.name}
                            className={`flex justify-center space-x-4 xl:pt-4 sm:my-10 xl:py-0 w-60 h-36 ${activeTab === tab ? "border rounded-xl pt-2 bg-white " :
                                "shadow-md rounded-xl pt-2 bg-[#f6f5f4] "
                                }`}
                            onMouseEnter={() => setActioveTab(tab)}
                        >
                            <div className="px-4">
                                <div className="flex items-center">
                                    <div>{tab.icon}</div>
                                    <div className="text-2xl font-medium">{tab.name}</div>
                                    {/* render the feature tag only for the ai tab */}
                            
                                </div>

                                <motion.div className="flex flex-col text-sm"
                                    initial={{ y: 0 }}
                                    animate={{ y: activeTab === tab ? 10 : 25 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div>
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                            {tab.description}
                                        </motion.div>
                                    </div>

                                    {/* conditionsl rendering for the Learn more */}

                                    {activeTab === tab && (
                                        <div className="text-sm">
                                            {tab.mone}
                                        </div>

                                    )}


                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* display content based on the action tab on kedium size screens and bigger */}
            <div className="hidden md:flex p-[50px] bg-slate-100 w-[500px] items-center justify-center relative mb-5">
                {activeTab && (
                    <Image src={activeTab.image}
                        alt={activeTab.name}
                        width={500}
                        height={500}
                        className="w-[400px] rounded-xl  h-[500px]"
                    />

                )}


            </div>

        </div>
    )
}

export default FristSection;