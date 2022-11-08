import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
// import "../../styles/globals/globals.scss";
import { useEffect, useState } from "react";
import {
  getTrainingdetails,
  getTraininginfo,
} from "../../components/http-service";
import { mediaUrl } from "../../services/constants";

function TrainingId() {
  const [eachtrainingData, seteachtrainingData] = useState(undefined);

  useEffect(() => {
    const url = location.pathname.split("/").at(-1);
    getTraininginfo(url).then(async (pageData) => {
      console.log(pageData);
      seteachtrainingData(pageData);
    });
  }, []);

  return (
    <>
      <Navbar src="./logo.png" height="20%" width="20%" />

      <div className="banner">
        {eachtrainingData?.training?.banner && (
          <img
            src={
              mediaUrl +
              eachtrainingData?.imagesData[eachtrainingData?.training?.banner]
                .imageUrl
            }
            className="trainingbanner-image"
          ></img>
        )}
      </div>
      <Breadcrumb />
      <div className="trainingdetails container" >

        <div>
          {eachtrainingData?.training?.title && (
            <h4 style={{ color: "black" }}>
              {eachtrainingData?.training?.title}
            </h4>
          )}
        </div>

        <br></br>

        <div className="row">
        <div className="col col-md-9 ">
          {eachtrainingData?.training?.content && (
            <p
              dangerouslySetInnerHTML={{
                __html: eachtrainingData?.training?.content,
              }}
              style={{ color: "black" }}
            ></p>
          )}
        </div>
        <div className="col col-md-3">
        {eachtrainingData?.training?.thumbnail && (
          <img
            src={
              mediaUrl +
              eachtrainingData?.imagesData[eachtrainingData?.training?.thumbnail]
                .imageUrl
            }
            className="trainingbanner-image"
          ></img>
        )}
        </div>

      </div>
     

      </div>
    </>
  );
}
export default TrainingId;
