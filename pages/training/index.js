import Breadcrumb from "../../components/Breadcrumb";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FooterBar from "../../components/Footer_bar";
import { useEffect, useState } from "react";
import {  getTrainingData,  getTrainingsList,} from "../../components/http-service";
import { mediaUrl } from "../../services/constants";
import { useRouter } from 'next/router';
 
const breadCrumbs = [
  {
    id : "home",
    path : "/"
  },
  {
    id : "training",
    path : "/training"
  },
  {
    id : "blog",
    path : "/blog"
  },
  {
    id : "about",
    path : "/about"
  },
  // {
  //   id : "home/training/"+routeParams,
  //   component : "/"
  // }
]

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

//   const getTrainingInfo=(title)=>{
// alert(title);
//   }

  return (
    <>
      <Navbar src="./logo.png" height="20%" width="20%" />
      <Breadcrumb selectedBreadCrumb={breadCrumbs[selectedBreadCrumb].id} breadCrumbs={breadCrumbs} path={breadCrumbs[selectedBreadCrumb].path}/>
      <h4 style={{ color: "black", textAlign: "left", margin: "20px" }}>
        TRAINING{" "}
      </h4>
      <div className="wrap">
        <div className="search">
          <input
            onChange={(e) => setsearch(e.currentTarget.value)}
            placeholder="Search"
            style={{ height: "40px", width: "280px", borderRadius: "10px" }}
            title="Search bar"
          />
          
        </div>
      </div>
      <div className="traininglists">
        <div className="row">
          {trainingData?.map((training) => {
            return (
              <a
              // onClick={() => getTrainingInfo(training.url)}
              href={"training/" + training.url}  className="item col-md-3">
                <img
                  src={mediaUrl + training.thumbnail}
                  className="training-image"
                />
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
      <FooterBar />
    </>
  );
}
