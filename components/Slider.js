import { useEffect, useState } from "react";
import { getwidgetsData, getWidgetsHomePageSlider } from "./http-service";

function Slider() {
  const [homepagesliderWidget, sethomepagesliderWidget] = useState(null);

  useEffect(() => {
    getwidgetsData().then(() => {
      sethomepagesliderWidget(getWidgetsHomePageSlider());
    });
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://thumbs.dreamstime.com/b/technology-banner-background-old-new-using-computer-circuits-old-machine-cogs-37036025.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg" className="d-block w-100" alt=".."/>
    </div>
    <div className="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );

}

export default Slider;
