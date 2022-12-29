import { useEffect, useState } from "react";
import { cancellationandrefund } from "../components/http-service";

function cancellationandrefundd() {
  const [cancellation, setcancellation] = useState(null);

  useEffect(() => {
    cancellationandrefund().then((pageData) => {
      setcancellation(pageData);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {cancellation?.title && (
              <h5 className="heading-left" style={{ color: "black" , texttransform: "uppercase"}}>
                {cancellation?.title}
              </h5>
            )}
          </div>
  
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col">
            {cancellation?.content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: cancellation?.content,
                }}
              ></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default cancellationandrefundd;
