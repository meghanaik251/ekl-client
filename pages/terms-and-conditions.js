import { useEffect, useState } from "react";

import { termsandconditions } from "../components/http-service";

function termsandconditionss() {
  const [terms, setterms] = useState(null);

  useEffect(() => {
    termsandconditions().then((pageData) => {
      setterms(pageData);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {terms?.title && (
              <h5 className="heading-left terms_column" style={{ color: "black" }}>
                {terms?.title}
              </h5>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col terms_content">
            {terms?.content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: terms?.content,
                }}
              ></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default termsandconditionss;
