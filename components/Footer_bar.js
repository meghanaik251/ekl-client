import { useEffect, useState } from "react";
import { getFooterMenus, getMenusData } from "./http-service";

// import name from "../services/http-service";

function Footer_bar() {
  const [footerData, setFooter] = useState(null);
  
  useEffect(() => {
    getMenusData().then(() => {
      setFooter(getFooterMenus())
    })
  },[])
  
  return (
    <div className = "footer_bar_container">
        {
          footerData?.items.map((footer,i) =>   !footer.hide && (
            <span key={i}> <a className="footer_bar_items" href={"/"+footer.url}>{footer.title}</a></span>
          ))
        }
        <span className = "gs-fotter-left">Copyright 2018· Designed & Developed by <span className = "eklakshya"> <a>eklakshya</a>  </span> All rights reserved</span>
    </div>  
  ); 
}

export default Footer_bar;