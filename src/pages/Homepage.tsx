
import Hero from '../components/homepage/Hero'
import PromotionBanners from '../components/homepage/PromotionBanners'
import WhoAreWe from '../components/homepage/WhoAreWe'
import TopStores from '../components/homepage/TopStores'
import DayDeals from '../components/homepage/DayDeals'
import TrendingCoupons from '../components/homepage/TrendingCoupons'
import Blogs from '../components/homepage/Blogs'
import Extension from '../components/homepage/Extension'
import Newsletter from '../components/homepage/Newsletter'
import ReferBanner from '../components/homepage/ReferBanner'
import ExclusiveMerchants from '../components/homepage/ExclusiveMerchants'

const Homepage = () => {
  return (
    <div>
        <Hero />
        <PromotionBanners />
        <ExclusiveMerchants />
        <DayDeals />
        <TopStores />
        <WhoAreWe />
        <TrendingCoupons />
        <ReferBanner />
        <Blogs />
        <Extension />
        <Newsletter />
        {/* <Articles /> */}
    </div>
  )
}

export default Homepage