// import { useEffect, useState } from "react";
// import {

// } from "./http-service";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import Breadcrumbs from "nextjs-breadcrumbs";
import { Link } from "react-router-dom";

export default function Breadcrumb({children, href}) {
  //
  const router = useRouter()

  const [breadcrumbdata, setbreadcrumbdata] = useState([]);
  useEffect(() => {
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
    
  }, []);

  return (
    <>
      <div className="bcrumbs">
        <button className="textdecoration" onClick={() => router.push("/")}>
          home
        </button>
        {/* {breadcrumbdata.slice(1,).map((bread) => (
           <span >/<a href={bread} >{bread}</a></span>
        ))} */}
        {breadcrumbdata.map((bread) => (
          <span>
            {" "}
            /{" "}
            {/* <a className="textdecoration" href={"/" + bread.url}>
              {bread.name}
            </a> */}
          <button className="textdecoration" onClick={() => router.push("/"+ bread.url)}>{bread.name}</button>

           {/* { Router.push('/product', '/product/some-product?sortBy=price', { shallow: true })} */}
          </span>
        ))}
      </div>
    </>
  );
}

export { Breadcrumb };
