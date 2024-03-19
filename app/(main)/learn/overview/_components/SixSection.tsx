

import Image from "next/image";

const SixSection = () => {
    return (

        <div className="py-20  items-center justify-center flex flex-col bg-[#827d74]">
            <div className="text-4xl text-center">Robust features to achieve any <br /> busines objective as your team scales</div>

            <div className="flex flex-col gap-[10px] px-10 pt-10">
                <div className='flex flex-col md:flex-row gap-[10px]'>
                    <div className="flex flex-col ">
                        <Image src={'/image/settings.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                        <div className="text-2xl font-semibold"> Drive cross-team efficiency  </div>
                        <div className="text-xl flex flex-col gap-2">
                            <div>.Connect teams and authmate work to improve productivity.</div>
                            <div>.Gain clarity on bottlenecks and allocate work Workload.</div>
                            <div>.Manage resourcing for teams with messing and unique views.</div>
                        </div>
                    </div>

                    <div className="flex flex-col  ">
                        <Image src={'/image/logo8.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                        <div className="text-2xl font-semibold">Automate processes </div>
                        <div className="text-xl flex flex-col gap-2">
                            <div>.Systemize with Workflow Builder and Forms</div>
                            <div>.Reduce manual work wiht custom Rules like assigning tasks and updating statuses.</div>
                            <div>.Automate work in one place with 200+ integrations.</div>
                        </div>


                    </div>

                    <div className="flex flex-col">
                        <Image src={'/image/logo9.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                        <div className="text-2xl font-semibold"> Get real-time insights  </div>
                        <div className=" text-xl  flex flex-col gap-2">
                            <div>.Monitor progress across teams,without manual work.</div>
                            <div>.Build peersonalized visualizations whit Custom Fields and Charts.</div>
                            <div>.Save time on creating reports with a robust Charts template library.</div>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col md:flex-row gap-[10px]">

                    <div className="flex flex-col ">
                        <Image src={'/image/logo10.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                        <div className="text-2xl font-semibold">Protect sensitive data</div>
                        <div className=" text-xl flex flex-col gap-2">
                            <div>.Connect teams and authmate work to improve productivity.</div>
                            <div>.Gain clarity on bottlenecks and allocate work Workload.</div>
                            <div>.Manage resourcing for teams with messing and unique views.</div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <Image src={'/image/logo11.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                        <div className="text-2xl font-semibold"> Mange permissions and settings </div>
                        <div className=" text-xl flex flex-col gap-2 ">
                            <div>.Control permissions,privacy settings,security requirements and mone from a centralized admin console.</div>
                            <div>.Reduce manual work with custom Rules like assingnin tasks and updatinig statuses.</div>

                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <Image src={'/image/logo12.svg'} width={300} height={400} alt="image" property="true" className="w-20 h-20" />
                        <div className="text-2xl font-semibold">Set goals and drive alignment</div>
                        <div className=" text-xl flex flex-col gap-2">
                            <div>.Align your organization and inspire ownership with Goals.</div>
                            <div>.Track all of your teams projects in a single view with Portfolios</div>
                            <div>.Save time on createing reports with a robust Charts Template library.</div>
                        </div>
                    </div>


                </div>

            </div>
        </div>


    )
}

export default SixSection