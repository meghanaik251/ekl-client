import { useEffect } from "react";

function DynamicApplicationFormControl({ applicatonFormDetails,setformdetails }) {
  // const [apkFormData, setapkFormData] = useState(undefined)

  // useEffect(() => {
  //   getFormdata().then(() => {
  //     setapkFormData(applicatonFormDetails)
  //   })
  // }, [])

  useEffect(() => {
    console.log("applicatonFormDetails", applicatonFormDetails, setformdetails);
  }, []);

  return (
    <>
      <div x className="container">
        <div className="row">
          {applicatonFormDetails?.controls?.map((controlData, i) => (
            <div
              key={i}
              className={"col-" + 12 / applicatonFormDetails?.form?.displayCol}
            >
              <lable>
                {" "}
                {controlData?.title}
                {controlData?.required && (
                  <small className="text-danger"> - Required</small>
                )}
              </lable>
              {/* <input type={} /> */}
              {controlData.controlType == "textbox" && (
                <input
                pattern="[A-Za-z]{3}"
                  className="input-md form-control"
                  placeholder={controlData?.title}
                  // {controlData?.required?'*':''}
                  // className="control-group"
                  type={controlData.type}
                  required={controlData?.required}
                />
              )}
              {controlData.controlType == "radio" &&
                controlData.options.map((radioData, ii) => (
                  <div key={ii}>
                    <label class="form-check-label" htmlFor={radioData.key}>
                      {radioData.value}
                    </label>
                    <input
                     pattern="[A-Za-z]{3}"
                      type="radio"
                      name={radioData.key}
                      value={radioData.value}
                      // required={controlData?.required}
                    />
                  </div>
                ))}
              {controlData.controlType == "textarea" && (
                <input
                 pattern="[A-Za-z]{3}"
                  placeholder={control.title}
                  className="control-group"
                  // type={controlData.type}
                  required={controlData?.required}
                />
              )}
              {/* {controlData.controlType == "checkbox" &&(
                  controlData.options.map((radioData, iii) => (
                    <div key={ii}>
                    <label htmlFor={radioData.key}>{radioData.value}</label>
                  name={radioData.key}
                  value={radioData.value}

                )

                } */}
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DynamicApplicationFormControl;
