import React, {useEffect, useState} from 'react';
function DynamicApplicationFormControl({
  applicatonFormDetails,
  setformdetails,
}) {
  // const [apkFormData, setapkFormData] = useState(undefined)

  // useEffect(() => {
  //   getFormdata().then(() => {
  //     setapkFormData(applicatonFormDetails)
  //   })
  // }, [])
  const [userDetails, setUserDetails] =useState({
    firstName: "",
    lastName: "",
    middletName: "",
    password: '',
    confirmPassword: '',
    gender: '',
    email: '',
    contact: '',
    altContact: '',
    state: '',
    district: '',
    taluk: '',
    college: '',
    bplCard: '',
    bplCardNo: '',
    qualification: '',
    specialisation: '',
    collegeName: '',
    yearOfPassing: '',
    universityName:'',
    sslcPercentage:'',
    puc1Percentage: '',
    puc2Percentage: '',
    puc2PassingYear: '',
    currentStudy:'',
    subjectOfCurrentStudy:'',
    files:'',
    referredBy:''
  });

  const onInputFieldChange = (event) => {
    console.log("onInputFieldChange", event.target.id, event.target.value);
    let eventId = event.target.id;
    let tempUserDetails = userDetails;
    tempUserDetails[eventId] = event.target.value;
    setUserDetails({
      ...userDetails,
      tempUserDetails
    })
    console.log(setUserDetails)
    if (eventId == "contact") {
      userDetails?.value?.lenght >= 10?"":"{error msg}";
      console.log("error msg")
      //check length
      //>10 errorState true errorMsg='' 
    }
    
  };


  useEffect(()=>{
    console.log("UserDetails", userDetails)
  },[userDetails])
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
                  id={controlData.key}
                  pattern="[A-Za-z]{3}"
                  className="input-md form-control"
                  placeholder={controlData?.title}
                  // {controlData?.required?'*':''}
                  // className="control-group"
                  type={controlData.type}
                  required={controlData?.required}
                  onChange={onInputFieldChange}
                  autocomplete="off"
                  value={userDetails[controlData.key]}
                />
              )}
              {controlData.controlType == "radio" &&
                controlData.options.map((radioData, ii) => (
                  <div key={ii}>
                    <label className="form-check-label" htmlFor={radioData.key}>
                      {radioData.value}
                    </label>
                    <input
                    value={userDetails[controlData.key]}
                      id={controlData.key}
                      //  pattern="[A-Za-z]{3}"
                      type="radio"
                      name={radioData.key}
                      // value={radioData.value}
                      onChange={onInputFieldChange}
                      autocomplete="off"
                      // required={controlData?.required}
                    />
                  </div>
                ))}
              {controlData.controlType == "textarea" && (
                <input
                value={userDetails[controlData.key]}
                  id={controlData.key}
                  pattern="[A-Za-z]{3}"
                  placeholder={control.title}
                  className="control-group"
                  // type={controlData.type}
                  onChange={onInputFieldChange}
                  autocomplete="off"
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
