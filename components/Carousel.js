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
    1024: { items: 4},
  };

  const items = trainingData?.map((training, i) => {
    return (
      
      <a key={i} href={"training/" + training.url}>
        <img 
        width={"100%"}
          src={mediaUrl + training.thumbnail}
          onDragStart={handleDragStart}
          role="presentation"
        />
      </a>
    );
  });

  return (
    <div className="carouselslider">
      <div className="offerings-heading">
       
      <h4 style={{ color: "black", textAlign: "left", margin: "20px" }}>
        OFFERINGS{" "}
        </h4>
        <a className="viewall" href="/training">
          View all
        </a>
        </div>
      
      <div className="p-3">
        <AliceCarousel
          autoPlay={true}
          // infinite={true}
          mouseTracking={true}
          items={items}
          controlsStrategy="alternate"
          responsive={responsive}
          disableDotsControls={true}
          infinite={true}
        />
      </div>
    </div>
  );
}

export default Offerings;
