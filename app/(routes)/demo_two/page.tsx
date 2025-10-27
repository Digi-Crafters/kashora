import BrandStory from '@/app/components/demo_two/BrandStory'
import ContactAndFooter from '@/app/components/demo_two/Footer'
import SunsetKashoraHero from '@/app/components/demo_two/Hero'
import OurCollection from '@/app/components/demo_two/OurCollection'
import OurProducts from '@/app/components/demo_two/OurProducts'


const page = () => {
  return (
    <div>
        <SunsetKashoraHero/>
        <OurProducts/>
        <BrandStory/>
        <OurCollection/>
        <ContactAndFooter/>
    </div>
  )
}

export default page