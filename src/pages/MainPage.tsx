import Header from "../widgets/Header/Header"
import Footer from "../widgets/Footer/Footer"
import HeroSliderVideo from "../entities/HeroSliderVideo/HeroSliderVideo"
import FeedBackSlider from "../entities/FeedBackSlider/FeedBackSlider"
import Contacts from "../widgets/Contacts/Contacts"
import AboutUs from "../widgets/AboutUs/AboutUs"
import Map from "../entities/Map/Map"


export default function MainPage() {
  return (
    <div>
      <Header />
      {/* <HeroSliderPhotos /> */}
      <HeroSliderVideo />
      <section id="contacts">
        <Contacts />
      </section>

      <section id="about">
        <AboutUs />
      </section>
      <section id="reviews">
        <FeedBackSlider />
      </section>
      <Map />
      <Footer />
    </div>
  )
}



