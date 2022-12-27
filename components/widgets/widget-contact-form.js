import React, { useEffect, useState } from "react";
import { getContactFormdata, submitContactFormdata } from "../http-service";

// getContactFormdata

function WidgetContactForm() {
  const [status, setstatus] = useState(null);
  const [clickable, setclickable] = useState(true);
  const [displayform, setdisplayform] = useState(true);
  const [check, setcheck] = useState(true);
  const [validate, setvalidate] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
  });

  useEffect(() => {
    console.log("validate", validate);
    if (
      validate.name &&
      validate.email &&
      validate.subject &&
      validate.message
    ) {
      setcheck(false);
    } else {
      setcheck(true);
    }
  }, [validate]);

  const changeDetected = (e) => {
    setvalidate({ ...validate, [e.target.id]: e.target.value });
    const testPattern = new RegExp(e.target.pattern);
    console.log(e.target.value);

    document
      .getElementById(e.target.id)
      .classList.add(testPattern.test(e.target.value) ? "valid" : "invalid");
    document.getElementById(e.target.id + "-validation").style.display =
      testPattern.test(e.target.value) ? "none" : "block";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(data, "meghanaganaik");
    // this.setcheck(data)
    // setcheck(false)
    const JSONdata = JSON.stringify(data);

    setstatus("processing");
    submitContactFormdata(data)
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
        {status == "success" ? (
          <div className={"alert alert-success text-center"}>
            <div className="text-center display-center">
              <h4 style={{ color: "green" }}>
                <i className="fa fa-check-circle" aria-hidden="true"></i> We
                will get back to you soon.
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
                Please try again.
              </h4>
            </div>
          </div>
        ) : status == "processing" ? (
          <div className={"alert alert-processing text-center"}>
            <div className="text-center display-center">
              <div style={{ color: "processing" }} class="processing"></div>
              <h5 className="status">processing</h5>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div>
        <h5 className="heading space40">
          <span>Contact Form</span>
        </h5>
        <form id="form" role="form" onSubmit={handleSubmit} className="form">
          <div className="row row1">
            <div className="col-md-5 space-bottom-20 name-container">
              <input
                pattern="^\w{1,}$"
                onChange={changeDetected}
                formControlName="name"
                name="name"
                id="name"
                className="input-md form-control"
                placeholder="Name "
                // maxlength="200"
                required=""
                type="text"
              />
              <div
                className="text-danger"
                id="name-validation"
                style={{ display: "none" }}
              >
                <div>Name is required.</div>
              </div>
            </div>

            <div className="col-md-5 space-bottom-20 name-container">
              <input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                formControlName="email"
                onChange={changeDetected}
                name="email"
                id="email"
                className="input-md form-control"
                placeholder="Email "
                // maxlength="200"
                required=""
                type="email"
              />
              <div
                className="text-danger"
                id="email-validation"
                style={{ display: "none" }}
              >
                <div>Please enter a valid email.</div>
              </div>
            </div>
          </div>

          <br></br>
          <div className="space-bottom-20">
            <input
              formControlName="subject"
              pattern="[^'\x22]+"
              onChange={changeDetected}
              name="subject"
              id="subject"
              className="input-md form-control"
              placeholder="Subject"
              // maxlength="200"
              required=""
              type="text"
            />
            <div
              id="subject-validation"
              className="text-danger"
              style={{ display: "none" }}
            >
              <div>Subject is required.</div>
            </div>
          </div>
          <br></br>
          <div className="space-bottom-20">
            <textarea
              formControlName="message"
              pattern="^\w{1,}$"
              onChange={changeDetected}
              name="message"
              id="message"
              className="input-md form-control"
              rows="6"
              placeholder="Message"
              required=""
              // maxlength="400"
            ></textarea>
            <div className="text-danger">
              <div id="message-validation" style={{ display: "none" }}>
                Message is required.
              </div>
            </div>
          </div>
          <br></br>

          <button type="submit" disabled={check} className="btn-black">
            Send a Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default WidgetContactForm;
