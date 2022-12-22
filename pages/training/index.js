import Breadcrumb from "../../components/Breadcrumb";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FooterBar from "../../components/Footer_bar";
import { useEffect, useState } from "react";
import {  getTrainingData,  getTrainingsList,} from "../../components/http-service";
import { mediaUrl } from "../../services/constants";
import { useRouter } from 'next/router';
import WidgetContactForm from "../../components/widgets/widget-contact-form";
 


export default function Training() {
  const [trainingData, settrainingData] = useState(null);
  const [allTrainingData, setallTrainingData] = useState(null);
  const [selectedBreadCrumb, setSelectedBreadCrumb] = useState(0);
  const {router} = useRouter();

  useEffect(() => {
    getTrainingData().then(() => {
      settrainingData(getTrainingsList());
      setallTrainingData(getTrainingsList());
    });
  
    console.log("routeParams",router);
  }, []);

  const setsearch = (search) => {
    const searchString = new RegExp(search, "i");
    settrainingData(
      allTrainingData.filter(
        (trainingData) =>
          searchString.test(trainingData.title) ||
          searchString.test(trainingData.description)
      )
    );
  };

  return (
    <>
      {/* <Breadcrumb selectedBreadCrumb={breadCrumbs[selectedBreadCrumb].id} breadCrumbs={breadCrumbs} path={breadCrumbs[selectedBreadCrumb].path}/> */}
     <div className="searchbarallignment">
       <h4 style={{ color: "black", textAlign: "left", margin: "20px" }}>
        TRAINING{" "}
      </h4>
      
        <div className="search">
          <input
            onChange={(e) => setsearch(e.currentTarget.value)}
            placeholder="Search"
            
            title="Search bar"
          />
          
        </div>
        </div>
    
      <div className="traininglists">
        <div className="row">
      
          {trainingData?.map((training) => {
          
            return (
              <a
              // {widgetNavigation: "form"
              // onClick={() => getTrainingInfo(training.url)}
              href= {training.url } className="item col-md-3">
                <img
                  src={mediaUrl + training.thumbnail}
                  className="training-image"
                />
                <b></b>
                {/* <p>{training.widgetNavigation}</p> */}
               
              </a>
              
            );
          })}
      
        </div>
      </div>
     
    </>
  );
}
