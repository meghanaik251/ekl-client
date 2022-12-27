import { useEffect, useState } from "react";
import { getFooterMenus, getMenusData } from "./http-service";
import { useRouter } from "next/router";

function Footer_bar() {
  const [footerData, setFooter] = useState(null);
  const router = useRouter();
  useEffect(() => {
    getMenusData().then(() => {
      setFooter(getFooterMenus());
    });
  }, []);

  return (
    <div className="footer_bar_container">
      {footerData?.items.map(
        (footer, i) =>
          !footer.hide && (
            <span key={i}>
              {" "}
              <button
                className="footer_bar_items"
                onClick={() => router.push("/" + footer.url)}
              >
                {footer.title}
              </button>
            </span>
          )
      )}
      <span className="gs-fotter-left">
        Copyright 2018· Designed & Developed by{" "}
        <span className="eklakshya">
          {" "}
          <a>eklakshya</a>{" "}
        </span>{" "}
        All rights reserved
      </span>
    </div>
  );
}

export default Footer_bar;
