import { useEffect } from "react";

function DynamicApplicationFormControl({ applicatonFormDetails }) {
  // const [apkFormData, setapkFormData] = useState(undefined)

  // useEffect(() => {
  //   getFormdata().then(() => {
  //     setapkFormData(applicatonFormDetails)
  //   })
  // }, [])

  useEffect(() => {
    console.log("applicatonFormDetails", applicatonFormDetails);
  }, []);

  return (
    <>
      <div x className="container">
        <div className="row" >
          {applicatonFormDetails?.controls?.map((controlData, i) => (
            <div 
              key={i}
              className={"col-" + 12 / applicatonFormDetails?.form?.displayCol}
            >
              <lable >
                {" "}
                
                {controlData?.title}
                {controlData?.required && <small className="text-danger"> - Required</small>}
              </lable>
              {/* <input type={} /> */}
              {controlData.controlType == "textbox" && (
                <input
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
                    <label  class="form-check-label" htmlFor={radioData.key}>{radioData.value}</label>
                    <input
                      type="radio"
                      name={radioData.key}
                      value={radioData.value}
                      // required={controlData?.required}
                    />
                  </div>
                ))}
                {controlData.controlType == "textarea" &&(
                    <input
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
                {/* {
                  controlData.controlType =="dropdown" &&()
                } */}
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <div className="control-group">
  //     {applicatonFormDetails?.controls?.title}

  //       <label>

  //   {applicatonFormDetails?.controls?.title}<small className="text-danger"> - Required</small>
  //     </label>

  //       <div>
  //         <input
  //           className="input-md form-control"

  //           placeholder={applicatonFormDetails?.controls?.title}

  //           maxLength="250"
  //         />
  //         <textarea
  //           className="input-md form-control"
  //           placeholder={applicatonFormDetails?.controls?.title}
  //           maxLength="250"
  //         ></textarea>
  //         <select className="form-control">
  //           <option>{applicatonFormDetails?.controls?.validationMessage}</option>
  //         </select>
  //         <div>
  //           <div className="form-check">
  //             <input type="checkbox" />
  //             <label className="form-check-label">{applicatonFormDetails?.controls?.title}</label>
  //           </div>
  //         </div>
  //         <div>
  //           <div className="form-check">
  //             <input type="radio" />
  //             <label className="form-check-label">{applicatonFormDetails?.controls?.options?.value}</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="errorMessage">{applicatonFormDetails?.controls?.options?.value}</div>
  //     </div>
  //   </div>
  // );
}

export default DynamicApplicationFormControl;
