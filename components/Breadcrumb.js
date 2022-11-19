// import { useEffect, useState } from "react";
// import {

// } from "./http-service";
import React, {useEffect, useState} from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';



export default function Breadcrumb() {
    // 
    const [breadcrumbdata, setbreadcrumbdata] = useState([])
    useEffect(() => {
      setbreadcrumbdata(location.pathname.split("/"))
    }, [])
    
    
  return (
    <>
      <div className="breadcrumb">
        <a href='/' >home</a>
        {breadcrumbdata.slice(1,).map((bread) => (
           <span >/<a href={bread} >{bread}</a></span>
        ))}
      </div>
    </>
  );
}

export {Breadcrumb} 
