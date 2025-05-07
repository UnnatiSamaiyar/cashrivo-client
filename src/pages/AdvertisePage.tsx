
import AboutSection from '../components/advertisepage/AboutSection'
import AdvertiseFAQs from '../components/advertisepage/AdvertiseFAQs'
import AdvertiseForm from '../components/advertisepage/AdvertiseForm'
import AdvertiseHeader from '../components/advertisepage/AdvertiseHeader'
import Benefits from '../components/advertisepage/Benefits'
import Campaigns from '../components/advertisepage/Campaigns'
import Newsletter from '../components/homepage/Newsletter'

const AdvertisePage = () => {
  return (
    <div>
        <AdvertiseHeader />
        <AboutSection />
        <Benefits />
        <AdvertiseForm />
        <Campaigns />
        <Newsletter />
        <AdvertiseFAQs />
    </div>
  )
}

export default AdvertisePage