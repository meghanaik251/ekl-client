import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import FooterBar from "../components/Footer_bar"
import Offerings from "../components/Offerings"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <div>
      <Navbar src = "./logo.png" height = "20%" width = "20%"/>
      <Slider />
      <Offerings />
      <Testimonials />
      <Footer />
      <FooterBar />
    </div>
  )
}