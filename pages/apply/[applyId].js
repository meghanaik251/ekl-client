import Footer from "../../components/Footer";
import Footer_bar from "../../components/Footer_bar";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getFormdata } from "../../components/http-service";
import DynamicApplicationForm  from "../../components/application-form/dynamic-application-form";
import Link from "next/link";

function ApplyId() {
  const [eachformData, seteachformData] = useState([]);
  // const [submittedformdata, submittedformdata]

  useEffect(() => {
    const url = location.pathname.split("/").at(-1);
    getFormdata(url).then(async (pageData) => {
      console.log(pageData,"controlllllllllllllllaassss");
      seteachformData(pageData);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {eachformData?.form?.title && (
              <h5 className="heading space40">
               <span>{eachformData?.form?.title}</span>
              </h5>
            )}
            {eachformData?.form?.description && (
              <p className="text-center space-bottom-40">{eachformData?.form?.description }</p>
            )}
      
        <DynamicApplicationForm applicatonForm={eachformData}/>
            {/* <app-dynamic-form *ngIf="applicatonForm.length" [formDetails]="formDetails" [applicatonForm]="applicatonForm"></app-dynamic-form> */}
          </div>
        </div>
      </div>

    </>
  );
}

export default ApplyId;
