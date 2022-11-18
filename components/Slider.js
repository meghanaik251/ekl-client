import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
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

  const items = [
  <div  className="sliderContainer">
    {homepagesliderWidget?.content.map((homepageslide,i) => {
      return (
        // <a href={homepageslide._id} >
          <img key={i}
          src={mediaUrl + homepageslide.imageUrl}         
            // onDragStart={handleDragStart}
            role="presentation"
          />
        
        // </a>
      );
    })}
    </div>
  ]

  return (
    <div className="carouselslider">
    <div className="p-1">
    <AliceCarousel
      autoPlay={true}
      infinite={true}
      mouseTracking
      items={items}
      controlsStrategy="alternate"
      // responsive={responsive}
    />
  </div>
  </div>
  )
}

export default Slider;
