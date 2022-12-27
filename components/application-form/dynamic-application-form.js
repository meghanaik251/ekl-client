import { useEffect, useState } from "react";
import { getSubmitedformddata, submitDoc } from "../http-service";

import DynamicApplicationFormControl from "./dynamic-application-form-control";

function DynamicApplicationForm({ applicatonForm }) {
  const [displayform, setdisplayform] = useState(true);
  const [formdetails, setformdetails] = useState({});

  const [status, setstatus] = useState(null);
  const [uploadfile, setuploadfile] = useState({});
  const [reset, setreset] = useState({});

  const [check, setcheck] = useState(true);
 const [resetcheck, setresetcheck] = useState(true);


  useEffect(() => {
    const trainingId = localStorage.getItem("trainingId");
    console.log(applicatonForm,"dsds")
    setformdetails({ formId: applicatonForm?.form?._id, trainingId });
  }, [applicatonForm]);

  const onEditChange = (e) => {
    !(!(e.target.value)) && setresetcheck(!true);
   
    setformdetails({ ...formdetails, [e.target.name]: e.target.value });
      const requirredItems = applicatonForm.controls.map((controlData) => controlData.key);
      const currentValues = { ...formdetails, [e.target.name]: e.target.value };
      const existingItems = Object.keys(currentValues)
      setcheck(!requirredItems.map((item) => existingItems.includes(item) && Boolean(currentValues[item])).reduce((a,b)=> a&&b))

    const files = e.target.files;

   
    if (e.target.type == "file") {
      const File = e.target.files;
      console.log(e.target.files,"hiii file")
      var formData = new FormData();
      files.length && formData.append("files", files[0]);
      formData && console.log(formData, "g");
      console.log(formData,"hii formdata")
      submitDoc(formData, (fileUrl) => {
        setformdetails({ ...formdetails, files: fileUrl });
      });
    
    }
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

  const resetfun=(e)=>{
    getSubmitedformddata(formdetails)
    setformdetails({ ...formdetails, [e.target.name]: e.target.value });
 console.log( formdetails,"hohihooooooooooooooooooo")
  setresetcheck(false)
  }

  return (
    <div>
      <div>
        {displayform ? (
          <form>
            <div className="row">
              <DynamicApplicationFormControl
                applicatonFormDetails={applicatonForm}
                onEditChange={onEditChange}
                setformdetails={setformdetails}
              />
            </div>

            <br></br>
            <br></br>
            <div className="row">
              <div className="col">
                <button type="reset"
                 className="btn-black" 
                 onClick={resetfun}
                 disabled={resetcheck}>
                  Reset
                </button>
                <button
                  disabled={check}
                  type="submit"
                  className="btn-color"
                  onClick={onsubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            <br></br>
          </form>
        ) : (
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
                  <div style={{ color: "processing" }} className="processing"></div>
                  <h5 className="status">processing</h5>
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
