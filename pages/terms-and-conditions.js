import { useEffect, useState } from "react";


import { termsandconditions } from "../components/http-service";

function termsandconditionss(){
    const [terms, setterms] = useState(null);

    useEffect(() => {
        termsandconditions().then((pageData) => {
            setterms(pageData);
      });
    }, []);
    
    return(
        <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {terms?.title && (
              <h5 className="heading-left" style={{ color: "black" }}>
                {terms?.title}
              </h5>
            )}
            {/* <h5 ><span class='active'>{{commonUtilsService.curentPage.data?.title}}</span></h5> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {terms?.content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: terms?.content,
                }}
              ></p>
            )}
          </div>
        </div>
      </div></div>
    )

}
export default termsandconditionss;