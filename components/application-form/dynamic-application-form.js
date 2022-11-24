// import {DynamicApplicationFormControl } from "../application-form/dynamic-application-form-control";
import { useEffect, useState } from "react";
import { getSubmitedformddata } from "../http-service";

import DynamicApplicationFormControl from "./dynamic-application-form-control";

function DynamicApplicationForm({ applicatonForm }) {
  // alert(applicatonForm, "jjkkkkkkkkkkkkkkkkkkkkkkkkjjjjjjjjjj")

  const [displayform, setdisplayform] = useState(true);
  const [formdetails, setformdetails] = useState({});
  const [status, setstatus] = useState(null);

  useEffect(() => {
    setformdetails({ formId: applicatonForm?.form?._id });
  }, [applicatonForm]);

  const onEditChange = (e) => {
    setformdetails({ ...formdetails, [e.target.name]: e.target.value });
    console.log(formdetails);
  };

  const onsubmit = (e) => {
    setdisplayform(false);
    setstatus("processing");
    getSubmitedformddata(formdetails)
      .then(() => {
        setstatus("success");
        setTimeout(() => {
          setdisplayform(true);
        }, 3000);
      })
      .catch((error) => {
        setstatus("danger");
        setTimeout(() => {
          setdisplayform(true);
        }, 3000);
      });
  };

  return (
    <div>
      <div>
        {displayform ? (
          <form onSubmit={onsubmit}>
            <div className="row">
              <DynamicApplicationFormControl
                applicatonFormDetails={applicatonForm}
                onEditChange={onEditChange}
                setformdetails={setformdetails}
              />
            </div>
            <div className="row">
              <div className="col">
                <button type="reset" className="btn-black">
                  Reset
                </button>
                <button type="submit" className="btn-color" onClick={onsubmit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : (
          // <div className="alert alert-{{status}} text-center">
          //   <div className="text-center display-center">
          //     <h4>
          //       {" "}
          //       <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
          //       Application submitted
          //     </h4>
          //     <div className="processing"></div>
          //     <h5 className="status">status</h5>
          //     <h4>
          //       {" "}
          //       <i
          //         className="fa fa-exclamation-triangle"
          //         aria-hidden="true"
          //       ></i>{" "}
          //       We could not submit your application. Please try again.
          //     </h4>
          //   </div>
          //   <a className="btn btn-success text-center" href="/">
          //     Go back to home
          //   </a>
          // </div>

          <div>
            {status == "success" ? (
              <div className={"alert alert-success text-center"}>
                <div className="text-center display-center">
                  <h4 style={{ color: "green" }}>
                    {" "}
                    <i
                      className="fa fa-check-circle"
                      aria-hidden="true"
                    ></i>{" "}
                    Application submitted
                  </h4>
                </div>
              </div>
            ) : status == "danger" ? (
              <div className={"alert alert-danger text-center"}>
                <div className="text-center display-center">
                  <h4 style={{ color: "#d66349" }}>
                    {" "}
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>{" "}
                    We could not submit your application. Please try again.
                  </h4>
                </div>
              </div>
            ) : status == "processing" ? (
              <div className={"alert alert-processing text-center"}>
                <div className="text-center display-center">
                  <div style={{ color: "processing" }} class="processing"></div>
                  <h5 class="status">processing</h5>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DynamicApplicationForm;
