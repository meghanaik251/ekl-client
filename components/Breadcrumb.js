// import { useEffect, useState } from "react";
// import {

// } from "./http-service";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

// import Breadcrumbs from "nextjs-breadcrumbs";

export default function Breadcrumb({children, href}) {
  
  const router = useRouter()

  const [breadcrumbdata, setbreadcrumbdata] = useState([]);

  const BreadcrumbUpdate = (e='') => {
    
    const breadcrumbs = location.pathname
      .split("/")
      .filter((b) => b.length)
      .map((bread, i) => {
        return {
          name: bread,
          url: location.pathname
            .split("/")
            .filter((b) => b.length)
            .slice(0, i + 1)
            .join("/"),
        };
      });
    setbreadcrumbdata(breadcrumbs);
  }

  useEffect(() => {
    BreadcrumbUpdate()
  }, []);
  
  useEffect(() => {
    router.events.on('routeChangeComplete', BreadcrumbUpdate)
  }, [router.events]);

  return (
    <>
      <div className="bcrumbs">
        <a className="textdecoration" onClick={() => router.push("/")}>
          home
        </a>
       
        {breadcrumbdata.map((bread) => (
          <span>
            {" "}
            /{" "}
            
          <a className="textdecoration" onClick={() => router.push("/"+ bread.url)}>{bread.name}</a>

          </span>
        ))}
      </div>
    </>
  );
}

export { Breadcrumb };
