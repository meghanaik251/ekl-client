import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getTrainingData,
  getTrainingsList,
} from "./../components/http-service";
import { mediaUrl } from "../services/constants";


function Offerings() {

  const [trainingData, settrainingData] = useState(null);

  useEffect(() => {
    getTrainingData().then(() => {
      settrainingData(getTrainingsList());
    });
  }, []);
  
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    // <img
    //   src={
    //     "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
    //   }
    //   onDragStart={handleDragStart}
    //   role="presentation"
    // />,

<>
    {trainingData?.map((training) => {
      return (
        <a href={training.url} >
          <img
            src={mediaUrl + training.thumbnail}
         
            onDragStart={handleDragStart}
            role="presentation"
          />
        </a>
      );
    })}
    </>
    
    
   
   
  ];

  return (
    <div className="carouselslider">
      <h4 style={{ color: "black", textAlign: "left", margin: "20px" }}>
        OFFERINGS{" "}
        <a className="viewall" href="/training">
          View all
        </a>
      </h4>
      <div className="p-3">
        <AliceCarousel
          autoPlay={true}
          // infinite={true}
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          responsive={responsive}
        />
      </div>
    </div>
  );
}

export default Offerings;
