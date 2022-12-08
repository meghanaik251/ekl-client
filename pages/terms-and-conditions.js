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
      <div class="container">
        <div class="row">
          <div class="col">
            {terms?.title && (
              <h5 class="heading-left" style={{ color: "black" }}>
                {terms?.title}
              </h5>
            )}
            {/* <h5 ><span class='active'>{{commonUtilsService.curentPage.data?.title}}</span></h5> */}
          </div>
        </div>
        <div class="row">
          <div class="col">
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