import { useEffect } from "react";

export default function Breadcrumb({selectedBreadCrumb,path,breadCrumbs}) {
    useEffect(() => {
      console.log("selectedBreadCrumb",selectedBreadCrumb);
    },[])
  return (
    <>
{/* {breadCrumbs.map((item, itemIndex) => ( */}
      <div className="breadcrumb">
      <a className="text-danger" href={path}>{selectedBreadCrumb}</a>
    </div>
{/* ))} */}
    </>
  );
}


