// import {DynamicApplicationFormControl } from "../application-form/dynamic-application-form-control";
import { useEffect, useState } from "react";

import DynamicApplicationFormControl from "./dynamic-application-form-control";

function DynamicApplicationForm({ applicatonForm }) {
  // alert(applicatonForm, "jjkkkkkkkkkkkkkkkkkkkkkkkkjjjjjjjjjj")
  // useEffect(() => {
  //   alert(applicatonForm)
  // }, [applicatonForm])

  const [displayform, setdisplayform] = useState(true);
  const [formdetails, setformdetails ]=useState(undefined)

  return (
    <div>
      <div>
        {displayform ? (
          <form>
            <div className="row">
              <DynamicApplicationFormControl
                applicatonFormDetails={applicatonForm} setformdetails={setformdetails}
              />
            </div>
            <div className="row">
              <div className="col">
                <button type="reset" className="btn-black">
                  Reset
                </button>

                <button
                  type="submit"
                  className="btn-color"
                  onClick={() => setdisplayform()}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="alert alert-{{status}} text-center">
            <div className="text-center display-center">
              <h4>
                {" "}
                <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
                Application submitted
              </h4>
              <div className="processing"></div>
              <h5 className="status">status</h5>
              <h4>
                {" "}
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>{" "}
                We could not submit your application. Please try again.
              </h4>
            </div>
            <a className="btn btn-success text-center" href="/">
              Go back to home
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default DynamicApplicationForm;
