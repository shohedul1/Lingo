import React from 'react'
import FirstSction from './_components/FirstSection'
import SecondSction from './_components/SecondSction'
import ThirdSection from './_components/ThirdSection'
import FourSection from './_components/FourSection'
import FiveSection from './_components/FiveSection'
import SixSection from './_components/SixSection/page'
import SevenSection from './_components/SevenSection'

const page = () => {
  return (
    <div>
      <FirstSction/>
      <SecondSction/>
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <SixSection />
      <SevenSection />
     
    </div>
  )
}

export default page