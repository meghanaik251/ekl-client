import { useEffect, useState } from "react";
import AliceCarousel, {ArrowLeft, ArrowRight} from "react-alice-carousel";
import { getwidgetsData, getWidgetsHomePageSlider ,   getTraininginfo,
} from "./http-service";
import { mediaUrl } from "../services/constants";
import { useRouter } from 'next/router';

function Slider() {
  const [homepagesliderWidget, sethomepagesliderWidget] = useState(null);
  const [eachtrainingData, seteachtrainingData] = useState(undefined);
  const router = useRouter()

console.log(homepagesliderWidget, "sdfffff")
  useEffect(() => {
    getwidgetsData().then(() => {
      sethomepagesliderWidget(getWidgetsHomePageSlider());
    });
    getTraininginfo().then(async (pageData) => {
      // console.log(url)
      seteachtrainingData(pageData);
      console.log(pageData)
    });
  }, []);

  const items = 
  // [
  // <div  className="sliderContainer">
    homepagesliderWidget?.content.map((homepageslide,i) => {
      
      return (
        <div>

        {/* {eachtrainingData?.training?.applicationFormUrl && ( */}
        <a onClick={() => router.push( "/apply/" + eachtrainingData?.training?.applicationFormUrl)}>
          <img className = "home_page_slider" key={i}
          src={mediaUrl + homepageslide.imageUrl}         
            // onDragStart={handleDragStart}
            role="presentation"
          />
          </a>
        {/* )} */}
          </div>
      );
    })
  
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
          />
      </div>

  </div>
  )
}

export default Slider;