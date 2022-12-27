import { useEffect, useState } from "react";
import { Privacypolicy } from "../components/http-service";

function Privacypolicyy() {
  const [privacypolicydeails, setprivacypolicydeails] = useState(null);

  useEffect(() => {
    Privacypolicy().then((pageData) => {
      setprivacypolicydeails(pageData);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {privacypolicydeails?.title && (
              <h5 className="heading-left" style={{ color: "black" }}>
                {privacypolicydeails?.title}
              </h5>
            )}
            {/* <h5 ><span class='active'>{{commonUtilsService.curentPage.data?.title}}</span></h5> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {privacypolicydeails?.content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: privacypolicydeails?.content,
                }}
              ></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Privacypolicyy;
