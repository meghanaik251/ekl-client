import Slider from "react-slick";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getTrainingData,
  getTrainingsList,
  getTraininginfo,
} from "./../components/http-service";
import { mediaUrl } from "../services/constants";
import { useRouter } from "next/router";

function Offerings() {
  const [trainingData, settrainingData] = useState(null);
  const [eachtrainingData, seteachtrainingData] = useState(undefined);

  useEffect(() => {
    getTrainingData().then(() => {
      settrainingData(getTrainingsList());
    });
  }, []);

  const handleDragStart = (e) => e.preventDefault();
  const router = useRouter();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  const items = trainingData?.map((training, i) => {
    return (
      <a
        key={i}
        className="offeringsimage"
        onClick={() => router.push(training.url)}
      >
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
        <button className="viewall" onClick={() => router.push("/training")}>
          View all
        </button>
      </div>

      <div className="p-3 offeringsimage">
        <AliceCarousel
          // autoPlay={true}
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
