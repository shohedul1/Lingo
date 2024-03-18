'use client';
import { Button } from "@/components/ui/button";
import { CalendarDays, CalendarMinus, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const FirstSection = () => {
    const [isActivePlan, setIsActivePlan] = useState(true);


    return (
        <div className="flex flex-col space-y-10  items-center justify-center bg-[#decfea] px-2 pb-10 overflow-x-hidden">
            <div className="space-y-6 flex flex-col text-center pt-10">
                <div className="text-gray-800 text-xl">PRICING</div>
                <div className="text-5xl">Fastly organinze your work, Start Free.</div>
                <div className="text-xl text-gray-500">Access Birds Features.No credit card required</div>
            </div>

            <div className="flex ">
                <button
                    className={`${isActivePlan ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} p-4 rounded-l-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsActivePlan(true)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarDays size={24} />
                        <div className="text-2xl">Monthly</div>
                    </div>

                </button>
                <button
                    className={`${!isActivePlan ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} p-4 rounded-r-lg focus:outline-none w-40 md:w-80`}
                    onClick={() => setIsActivePlan(false)}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <CalendarMinus size={24} />
                        <div className="text-2xl">Yearly</div>
                    </div>

                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className="flex items-center justify-center">
                    <div className="border-gray-500 p-10 rounded-lg border space-y-8 bg-[#ebdbdb] ">
                        <div className="text-2xl">Basic</div>
                        <div className="text-lg">For Teams that need to crete project plans with confidence</div>
                        <div className="text-5xl font-semibold">US$0</div>
                        <div className="text-md">Per User,per month billed annually $144</div>
                        <div className="text-center">
                            <Button variant={'secondary'} className="w-full">
                                Contact Sales
                            </Button>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>
                        <div className="text-md">Manage Tasks and personal To-Dos:</div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2Factor Authentication </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">24/7 Customer Support</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Company</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Teams </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Owner</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Customs domain</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="border-[#d3ef44] p-10 rounded-lg border space-y-8 bg-[#c4c4c4] ">
                        <div className="text-2xl">Premuin</div>
                        <div className="text-lg">For Teams that need to crete project plans with confidence</div>
                        {isActivePlan ? (
                           <div className="text-5xl font-semibol">US$12.99</div>
                        ):(
                            <div className="text-5xl font-semibol">US$99.99</div>
                        )}
                        <div className="text-md">Per User,per month billed annually $144</div>
                        <div className="text-center">
                           <Link href={"/leaderboard/contact"}>
                           <Button variant={'default'} className="w-full">
                                Contact Sales
                            </Button>
                           </Link>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>
                        <div className="text-md">Manage Tasks and personal To-Dos:</div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2Factor Authentication </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">24/7 Customer Support</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Company</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Teams </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Owner</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Customs domain</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="border-[#f64242] p-10 rounded-lg border space-y-8 bg-[#f2dbf8] ">
                        <div className="text-2xl">Business</div>
                        <div className="text-lg">For Teams that need to crete project plans with confidence</div>
                        {isActivePlan ? (
                           <div className="text-5xl font-semibol">US$49.99</div>
                        ):(
                            <div className="text-5xl font-semibol">US$599.99</div>
                        )}
                        <div className="text-md">Per User,per month billed annually $144</div>
                        <div className="text-center">
                          <Link href={"/leaderboard/contact"}>
                          <Button variant={'super'} className="w-full">
                                Contact Sales
                            </Button>
                          </Link>
                        </div>

                        <div className="text-2xl underline text-center">Purchase Now</div>
                        <div className="text-md">Manage Tasks and personal To-Dos:</div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Timeline </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited free viewers</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 Participants </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">5 GB Storage</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Projects </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Unlimited Project boards </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">2Factor Authentication </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">24/7 Customer Support</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Company</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Teams </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">1Owner</div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div className="flex space-x-6">
                                <div>
                                    <Check size={24} />
                                </div>
                                <div className="text-gray-500">Customs domain</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default FirstSection;