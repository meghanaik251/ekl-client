// import Navbar from "../../components/Navbar";

import { useEffect, useState } from "react";
import {
  // getTrainingdetails,
  getTraininginfo,
} from "../../components/http-service";
import { mediaUrl } from "../../services/constants";
import Footer from "../../components/Footer";
import Footer_bar from "../../components/Footer_bar";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";

function TrainingId() {
  const [eachtrainingData, seteachtrainingData] = useState(undefined);
  const [activeVideoData, setactiveVideoData] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    const url = location.pathname.split("/").at(-1);

    getTraininginfo(url).then(async (pageData) => {
      seteachtrainingData(pageData);
      localStorage.setItem("trainingId", pageData.training?._id);
      setactiveVideoData(pageData.videosData[0]);
    });
  }, []);

  return (
    <>
      <div className="banner">
        {eachtrainingData?.training?.banner && (
          <img
            src={
              mediaUrl +
              eachtrainingData?.imagesData[eachtrainingData?.training?.banner]
                .imageUrl
            }
          ></img>
        )}
      </div>
      <Breadcrumb></Breadcrumb>

      <div className=" container headoftrainng">
        <div>
          {eachtrainingData?.training?.title && (
            <h4 className="heading4">
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
                // style={{ color: "black" }}
                className="training-content-body"
              ></p>
            )}
          </div>
          <div className="col col-md-3">
            {eachtrainingData?.training?.thumbnail && (
              <img
                style={{ width: "100%" }}
                src={
                  mediaUrl +
                  eachtrainingData?.imagesData[
                    eachtrainingData?.training?.thumbnail
                  ].imageUrl
                }
                className="trainingthumbnail"
              ></img>
            )}
            <br></br>
            {eachtrainingData?.training?.applicationFormUrl && (
              <a
                onClick={() =>
                  router.push(
                    "/apply/" + eachtrainingData?.training?.applicationFormUrl
                  )
                }
                // href={
                //   "/apply/" + eachtrainingData?.training?.applicationFormUrl
                // }
                className="btn btn-orange btn-block "
              >
                APPLY
              </a>
            )}
            {/* <br></br> */}
            {eachtrainingData?.training?.documentUrl && (
              <a
                href={mediaUrl + eachtrainingData?.training?.documentUrl}
                className="btn btn-outline-orange btn-block"
                target="_blank"
              >
                <i aria-hidden="true " className="fa fa-download "></i>
                Brochure
              </a>
            )}
          </div>
        </div>

        {eachtrainingData?.videosData?.length ? (
          <div className="row">
            <div className="col">
              <h6>Related Videos</h6>
              <div className="player">
                <iframe
                  // width="800"
                  // height="500"
                  className="vdoiframe"
                  src={activeVideoData?.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h3> {activeVideoData?.title} </h3>
                <p>{activeVideoData?.description}</p>
                {/* </> */}
              </div>
              <div className="">
                <h6>More videos</h6>

                <div className="col col-md-4 padding-bottom vdoslist">
                  {eachtrainingData?.videosData?.map((d, i) => (
                    <>
                      {eachtrainingData?.imagesData[d.thumbnail] ? (
                        <img
                          style={{
                            height: "200px",
                            width: "200px",
                            display: "flex",
                            flexDirection: "row",
                          }}
                          key={i}
                          src={
                            mediaUrl +
                            eachtrainingData?.imagesData[d.thumbnail].imageUrl
                          }
                          className="videothumbnail"
                          alt=" "
                          onClick={() => setactiveVideoData(d)}
                        />
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        ) : (
          <></>
        )}
        <br></br>
        <br></br>
      </div>
    </>
  );
}
export default TrainingId;
