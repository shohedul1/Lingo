'use client';
import Image from "next/image";
import { useRef, useState } from "react";
import { PiBookOpenTextLight, PiCompassLight, PiHeadset, PiMegaphone, PiRocketLaunchFill, PiSparkleLight } from "react-icons/pi";

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: 'Enginnering',
    image: '/Enginnering.jpg'
  },
  {
    icon: <PiMegaphone />,
    name: 'Design',
    image: '/Design.avif'
  },
  {
    icon: <PiBookOpenTextLight />,
    name: 'Product',
    image: '/Product.jpg'
  },
  {
    icon: <PiCompassLight />,
    name: 'Marketing',
    image: '/Marketing.png'
  },
  {
    icon: <PiHeadset />,
    name: 'Operations',
    image: '/Operations.jpg'
  },
  {
    icon: <PiRocketLaunchFill />,
    name: 'HR',
    image: '/HR.avif'
  }
]

const FourtSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className='relative flex justify-center items-center flex-col px-8 lg:px-0 bg-[#97dcc8] py-10'>
      <div className="text-3xl xl:text-5xl font-medium text-center">
        Every team, side-by-side
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:row-span-1 gap-8 lg:gap-6 mt-8 ">
        {
          tabs.map((tab) => (
            <div key={tab.name}
              className={`flex px-10 md:px-0  lg:px-8 cursor-pointer ${activeTab.name === tab.name ?
                'md:rounded-xl rounded-md bg-[#632827] text-white  border-gray-200 md:border items-center justify-center flex'
                : 'rounded-md border border-red-100 md:rounded-xl  items-center justify-center hover:bg-[#c47c7c]'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              <div className="flex flex-col items-center md:justify-center mx-auto">
                <div className="hidden md:flex text-4xl">{tab.icon}</div>
                <div className="font-medium text-sm xl:text-lg mt-1">{tab.name} </div>

              </div>

            </div>
          ))
        }
      </div>

      {/* display content based on which tab is active */}



      <div className="p-12 border border-yellow-400 my-5 bg-[#c89bd3]">
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
  )
}

export default FourtSection