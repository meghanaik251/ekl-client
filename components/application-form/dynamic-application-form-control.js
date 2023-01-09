import React, { useEffect, useState } from "react";

function DynamicApplicationFormControl({
  applicatonFormDetails,
  setformdetails,
  onEditChange,
}) {
  const [status, setstatus] = useState(undefined);
  const [check, setcheck] = useState(true);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    middletName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    email: "",
    contact: "",
    altContact: "",
    state: "",
    district: "",
    taluk: "",
    collegeName: "",
    bplCard: "",
    bplCardNo: "",
    qualification: "",
    specialisation: "",
    collegeName: "",
    yearOfPassing: "",
    universityName: "",
    sslcPercentage: "",
    puc1Percentage: "",
    puc2Percentage: "",
    puc2PassingYear: "",
    currentStudy: "",
    subjectOfCurrentStudy: "",
    files: "",
    referredBy: "",
  });

  // useEffect(() => {
  //   console.log("userDetails", userDetails);
  //   if (

  //     userDetails.firstName &&
  //     userDetails.lastName &&
  //     userDetails.middletName
  //     // userDetails.password &&
  //     // userDetails.confirmPassword  &&
  //     // userDetails. gender &&
  //     // userDetails. email &&
  //     // userDetails. contact &&
  //     // userDetails. altContact &&
  //     // userDetails. state &&
  //     // userDetails.district  &&
  //     // userDetails. taluk &&
  //     // userDetails.college  &&
  //     // userDetails. bplCard &&
  //     // userDetails. bplCardNo &&
  //     // userDetails. qualification &&
  //     // userDetails. specialisation &&
  //     // userDetails.  collegeName&&
  //     // userDetails. yearOfPassing &&
  //     // userDetails. universityName &&
  //     // userDetails. sslcPercentage &&
  //     // userDetails. sslcPercentage &&
  //     // userDetails. puc1Percentage &&
  //     // userDetails.  puc2Percentage &&
  //     // userDetails.  currentStudy&&
  //     // userDetails. subjectOfCurrentStudy &&
  //     // userDetails. files &&
  //     // userDetails. referredBy

  //   ) {
  //     setcheck(false);
  //   } else {
  //     setcheck(true);
  //   }
  // }, [userDetails]);

  const changeDetected = (e) => {
    console.log(e.target.id);
    // const testPattern = new RegExp(e.target.pattern)

    setvalidate({ ...validate, [e.target.id]: e.target.value });
    const testPattern = new RegExp(e.target.pattern);
    console.log(e.target.required, "requireddddddddddddddddddddddddd");
    if (e.target.required == true) {
    }
    // console.log(e.target.value, )
    document
      .getElementById(e.target.id)
      .classList.add(testPattern.test(e.target.value) ? "valid" : "invalid");
    document.getElementById(e.target.id + "-validation").style.display =
      testPattern.test(e.target.value) ? "none" : "block";
    // console.log("changeDetected")
  };

  // const handleformSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);

  // setstatus('processing')
  //   submitContactFormdata(data).then(()=>{
  // 	setstatus("success")
  // }).catch((error)=>{
  // 	setstatus("danger")
  // });

  const handleformSubmit = (event) => {
    console.log("onInputFieldChange", event.target.id, event.target.value);
    let eventId = event.target.id;
    let tempUserDetails = userDetails;
    tempUserDetails[eventId] = event.target.value;
    setUserDetails({
      ...userDetails,
      tempUserDetails,
    });
    console.log(setUserDetails);
    if (eventId == "contact") {
      userDetails?.value?.lenght >= 10 ? "" : "{error msg}";
      console.log("error msg");
      //check length
      //>10 errorState true errorMsg=''
    }
  };

  useEffect(() => {
    console.log("UserDetails", userDetails);
  }, [userDetails]);
  useEffect(() => {
    console.log("applicatonFormDetails", applicatonFormDetails, setformdetails);
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            {applicatonFormDetails?.controls?.map((controlData, i) => (
              <div
                key={i}
                className={
                  "col-" + 12 / applicatonFormDetails?.form?.displayCol
                }
              >
                <label>
                  {" "}
                  {controlData?.title}
                  {controlData?.required && (
                    <small className="text-danger"> - Required</small>
                  )}
                </label>
                {controlData.controlType == "textbox" && (
                  <div>
                    <input
                      onInput={onEditChange}
                      onChange={(e) => console.log(e.currentTarget.value)}
                      id={controlData.key}
                      name={controlData.key}
                      pattern={controlData.validationExp}
                      className="input-md form-control"
                      placeholder={controlData?.title}
                      // {controlData?.required?'*':''}
                      // className="control-group"
                      type={controlData.type}
                      required={controlData?.required}
                      // onChange={onInputFieldChange}
                      // autocomplete="off"
                      // value={userDetails[controlData.key]}
                    />
                    <div id={controlData.key + "-validation"}>
                      <div className="vmsg" >{controlData.validationMessage}</div>
                    </div>
                  </div>
                )}
                {controlData.controlType == "radio" &&
                  controlData.options.map((radioData, ii) => (
                    <div id={controlData.key} key={ii}>
                      <label
                        className="form-check-label"
                        htmlFor={radioData.key}
                      >
                        {radioData.value}
                      </label>
                      <input
                        onInput={onEditChange}
                        // value={userDetails[controlData.key]}
                        id={radioData.key}
                        value={radioData.key}
                        type="radio"
                        name={controlData.key}
                        // value={radioData.value}
                        // onChange={onInputFieldChange}
                        // autocomplete="off"
                        required={controlData?.required}

                        //     <div class="form-check" *ngFor="let opt of control.options">
                        //     <input type="radio" [formControlName]="control.key" [value]="opt.key" />
                        //     <label class="form-check-label">
                        //        {{opt.value}}
                        //     </label>
                        // </div>
                      />

                      <div>
                        {/* <div>{controlData.validationMessage}</div> */}
                      </div>
                    </div>
                  ))}
                {controlData.controlType == "textarea" && (
                  <div id={controlData.key}>
                    <input
                      onInput={changeDetected}
                      id={controlData.key + "-validation"}
                      // value={userDetails[controlData.key]}
                      pattern="^\w{1,}$"
                      placeholder={control.title}
                      // className="control-group"
                      // type={controlData.type}
                      // onChange={onInputFieldChange}
                      // autocomplete="off"
                      required={controlData?.required}
                    />
                    <div>
                      {/* <div>{controlData.validationMessage}</div> */}
                    </div>
                  </div>
                )}
                {controlData.controlType == "checkbox" &&
                  controlData.options.map((radioData, iii) => (
                    <div key={ii}>
                      <label htmlFor={radioData.key}>{radioData.value}</label>
                      name={radioData.key}
                      value={radioData.value}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicApplicationFormControl;
