'use client';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import { useInView } from "framer-motion";

const tabs = [
    {
        name: 'Marketing',
        title: 'Meet campaign goals',
        feature1: 'Drive clarity to focus on shifting business needs',
        feature2: 'Maximize launch results',
        feature3: 'Automate and scale processes for approvals',
        image: '/image/tabs1.webp',
    },
    {
        name: 'Operations',
        title: 'Drive operational efficiency',
        feature1: 'Track work and see progress in real time',
        feature2: 'Standardize and automate processes',
        feature3: 'Unblock teams to hit revenue goals',
        image: '/image/tabs2.webp',
    },
    {
        name: 'IT',
        title: 'Automate and streamline IT requests',
        feature1: 'Onboard and offboard employees more efficiently',
        feature2: 'Get more control for critical security needs',
        feature3: 'Automate and scale processes for approvals',
        image: '/image/tabs3.webp',
    },
    {
        name: 'Product',
        title: 'Launch better products faster',
        feature1: 'Keep product development on track',
        feature2: 'Centralize launch information',
        feature3: 'Tie your product roadmap to your strategy',
        image: '/image/tabs4.webp',
    },
    {
        name: 'Company',
        title: 'Create a single source of truth',
        feature1: 'Connect your work to company goals',
        feature2: 'Automate workflows across departments',
        feature3: 'Make better decisions faster with access to real-time data',
        image: '/image/tabs5.webp',
    }
]

const SecondSction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <div className="bg-[#feffd0] py-10 hidden md:block">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-6xl text-center hidden md:block"
            >
                See how Teams are Bird
            </motion.div>
            <div className="hidden md:flex items-center justify-center gap-[50px]">
                {
                    tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={` ${activeTab == tab ? 'border-b-4 pt-2 border-[#59ee74] text-gray-800' : 'text-muted-foreground'}`}

                            onClick={() => setActiveTab(tab)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="flex text-3xl text-center items-center justify-center ">
                                {tab.name}

                            </div>

                        </div>
                    ))
                }

            </div>

            <div className="pt-10 hidden md:block">
                {activeTab && (
                    <div className="flex justify-center items-center gap-[20px]">
                        <div className="flex-col bg-gray-200 p-10 rounded-md w-[550px] h-[550px]">
                            <p className="text-4xl py-10 border-b underline">{activeTab.title}</p>
                            <div className="space-y-10 text-center justify-center">
                                <ul className="flex space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                    <li>
                                        {activeTab.feature1}
                                    </li>
                                </ul>
                                <ul className="flex space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                    <li>
                                        {activeTab.feature2}
                                    </li>
                                </ul>
                                <ul className="flex space-x-4">
                                    <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                    <li>
                                        {activeTab.feature3}
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex w-[550px] h-[550px]">
                            <Image src={activeTab.image} width={530} height={530} className="rounded-md" alt="image" property="true" />

                        </div>
                    </div>


                )

                }

            </div>
        </div>
    )
}

export default SecondSction