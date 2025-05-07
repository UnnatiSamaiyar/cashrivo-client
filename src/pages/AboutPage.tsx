
import AboutContent from '../components/aboutuspage/AboutContent'
import AboutHeader from '../components/aboutuspage/AboutHeader'
import OurMission from '../components/aboutuspage/OurMission'
import WhatWeDo from '../components/aboutuspage/WhatWeDo'
import Newsletter from '../components/homepage/Newsletter'

const AboutPage = () => {
  return (
    <div>
        <AboutHeader />
        <WhatWeDo />
        <OurMission />
        <Newsletter />
        <AboutContent />
    </div>
  )
}

export default AboutPage