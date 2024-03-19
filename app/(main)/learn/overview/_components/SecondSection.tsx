'use client';

import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { FcLeftDown2 } from "react-icons/fc";



const SecondSection = () => {
    return (
        <div className="flex flex-col  px-5 py-10 bg-[#999697]">
            <div className="text-5xl text-center">Why Dev.Sp ?</div>
            <div className="text-2xl text-center mt-5"> According to JDA, Dev.Sp improves employee productivity by 45%</div>
            <div className="flex items-center justify-center  flex-col md:flex-row mt-[50px] gap-2">
                <div className="border w-80 p-8 text-amber-300 rounded-lg bg-[#83b7e2]">
                    <div className="flex items-center gap-[5px]">
                        <Image src={'/image/icons1.png'} width={250} height={250} alt="image" className="h-20 w-20" />
                        <div className="text-3xl">82%+</div>
                    </div>
                    <div className="mt-4">Increased creativity</div>

                </div>
                <div className="border p-8 w-80 text-black rounded-lg bg-[#708da4]">
                    <div className="flex items-center gap-[5px]">
                        <Image src={'/image/icons2.png'} width={250} height={250} alt="image" className="h-20 w-20" />
                        <div className="text-3xl">37%+</div>
                    </div>
                    <div className="mt-4">Increated on-time completion</div>
                </div>
                <div className="border p-8 w-80 text-blue-300 rounded-lg bg-[#dee2e5]">
                    <div className="flex items-center gap-[5px]">
                        <FcLeftDown2 className="h-20 w-20 bg-" />
                        <div className="text-3xl">24%+</div>
                    </div>
                    <div className="mt-4">Increased productivity </div>

                </div>
                <div className="border p-8 w-80 text-lime-500 rounded-lg bg-[#030403]">
                    <div className="flex items-center gap-[5px]">
                        <AiOutlineCheck className="h-20 w-20" />
                        <div className="text-3xl">999 +</div>
                    </div>
                    <div className="mt-4">Happy clients</div>
                </div>
            </div>



        </div>
    )
}

export default SecondSection