import { useEffect, useState } from "react";
import AliceCarousel, {ArrowLeft, ArrowRight} from "react-alice-carousel";
import { getwidgetsData, getWidgetsHomePageSlider } from "./http-service";
import { mediaUrl } from "../services/constants";

function Slider() {
  const [homepagesliderWidget, sethomepagesliderWidget] = useState(null);
console.log(homepagesliderWidget, "sdfffff")
  useEffect(() => {
    getwidgetsData().then(() => {
      sethomepagesliderWidget(getWidgetsHomePageSlider());
    });
  }, []);

  const items = 
  // [
  // <div  className="sliderContainer">
    homepagesliderWidget?.content.map((homepageslide,i) => {
      return (
        // <a href={homepageslide._id} >
          <img className = "home_page_slider" key={i}
          src={mediaUrl + homepageslide.imageUrl}         
            // onDragStart={handleDragStart}
            role="presentation"
          />
        
        // </a>
      );
    })
  //   </div>
  // ]

  return (
    <div className = "arrow_centering">
        <div className="carouselslider">
          {/* <i class="fa fa-angle-left" onClick = {ArrowLeft} ></i> */}
            {/* <i class="fa fa-angle-right" onClick = {ArrowRight} ></i> */}
        </div>
          <div className="p-1">
          <AliceCarousel
            autoPlay={true}
            infinite={true}
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            disableButtonsControls={true}
            disableDotsControls = {true}
            animationDuration = {1500} 
            autoPlayInterval = {4000}
            // responsive={responsive}
            
          />
      </div>

  </div>
  )
}

export default Slider;