import { useEffect, useState } from "react";
import AliceCarousel, { ArrowLeft, ArrowRight } from "react-alice-carousel";
import { getwidgetsData, getWidgetsHomePageSlider } from "./http-service";
import { mediaUrl } from "../services/constants";

function Slider() {
  const [homepagesliderWidget, sethomepagesliderWidget] = useState(null);
  console.log(homepagesliderWidget, "sdfffff");
  useEffect(() => {
    getwidgetsData().then(() => {
      sethomepagesliderWidget(getWidgetsHomePageSlider());
    });
  }, []);

  const items = homepagesliderWidget?.content.map((homepageslide, i) => {
    return (
      <a href={homepageslide.link}>
        <img
          className="home_page_slider"
          key={i}
          src={mediaUrl + homepageslide.imageUrl}
          role="presentation"
        />
      </a>
    );
  });

  return (
    <div className="arrow_centering">
      <div className="carouselslider"></div>
      <div className="p-1 home_page_slide">
        <AliceCarousel
          autoPlay={true}
          // infinite={true}
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          disableDotsControls={true}
          animationDuration={1500}
          autoPlayInterval={4000}
        />
      </div>
    </div>
  );
}

export default Slider;
