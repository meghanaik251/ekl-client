import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import FooterBar from "../components/Footer_bar"
import Carousel from "../components/Carousel"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <div>
      
      <Slider />
      <Carousel/>
      <span id="testimonial"></span>
      <Testimonials />
     
    </div>
  )
}