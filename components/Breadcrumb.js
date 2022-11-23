// import { useEffect, useState } from "react";
// import {

// } from "./http-service";
import React, {useEffect, useState} from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';



export default function Breadcrumb() {
    // 
    const [breadcrumbdata, setbreadcrumbdata] = useState([])
    useEffect(() => {
      const breadcrumbs = location.pathname.split("/").filter(b => b.length).map((bread, i) => {
        return { name : bread, url : location.pathname.split("/").filter(b => b.length).slice(0, i+1).join("/") }
      })
      setbreadcrumbdata(breadcrumbs)
    }, [])
    
    
  return (
    <>
      <div className="bcrumbs">
        <a className='textdecoration' href='/ ' >home</a>
        {/* {breadcrumbdata.slice(1,).map((bread) => (
           <span >/<a href={bread} >{bread}</a></span>
        ))} */}
        {breadcrumbdata.map((bread) =>  <span > / <a className='textdecoration' href={"/" + bread.url} >{bread.name}</a></span>)}
      </div>
    </>
  );
}

export {Breadcrumb} 
