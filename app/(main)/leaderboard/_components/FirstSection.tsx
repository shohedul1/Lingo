'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";


function FirstSction() {

    const handleClick = ()=>{
        window.open("/leaderboard/contact");
    };
    return (
        <section className=" bg-[#E5E4E2] py-10">
            <div className="container mx-auto text-center w-3/5 pt-[30px]">
                <div className="text-6xl flex justify-center pb-10">
                    The Best Platform for Cross-functional work
                </div>
                <p className="text-lg md:text-1xl mb-10">
                    Want more efficiency in your organizition?Bird is easy for all teams to use,so you can deliver quality work,faster.
                </p>

                <div className="flex gap-4 justify-center">
                    <Link href={"/leaderboard/pricing"}>
                        <Button variant={'secondaryOutline'} size={'sm'}>
                            pricing
                        </Button>
                    </Link>


                   
                        <Button variant={'primaryOutline'} size={'sm'} onClick={handleClick}>
                            See how it works
                        </Button>
                   
                </div>
            </div>

            <div className="flex flex-col px-5 md:flex-row gap-10 items-center justify-center py-10">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className=" w-full md:w-[300px] md:h-[300px] flex items-center justify-center"
                >
                    <Image src={'/home.webp'} width={500} height={500} alt="image" property="true" />
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full md:w-[300px] md:h-[300px] flex items-center justify-center"
                >
                    <Image src={'/home1.webp'} width={500} height={500} alt="image" property="true" />
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className=" w-full md:w-[300px] md:h-[300px] flex items-center justify-center"

                >
                    <Image src={'/home2.webp'} width={500} height={500} alt="image" property="true" />
                </motion.div>



            </div>

        </section>
    )
}

export default FirstSction;