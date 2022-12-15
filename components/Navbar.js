// import { url } from "inspector";
import { useEffect, useState } from "react";
import { getMenusData, getMenusItem } from "./http-service";
import { useRouter } from 'next/router';
import Link from "next/link";


function Navbar(props) {
  const [menuItems, setmenuItems] = useState(null);
  const router = useRouter()

  useEffect(() => {
    getMenusData().then(() => {
      setmenuItems(getMenusItem());
    });
  }, []);

  return (
    <div className="sticky-top">
      <div className="navbar-light bg-light">
        <span className="navbar_contact"> hello@eklakshya.com</span>
        <span className="navbar_contact">
          {" "}
          <span className="contact"> Contact Numbers : </span> +91 8050050183
          +91 8050050185 +91 8050050186
        </span>{" "}
        <br />
      </div>

      <div className="navbar_container">
        <nav className="navbar navbar-expand-lg py-3 navbar-light ">
          <div className="container">
            <div className="navbar-brand">
            <a   onClick={() => router.push("/blog")}>
              
              <img
            
                src={props.src}
                height={props.height}
                width={props.width}
                alt=""
                className="d-inline-block align-middle mr-2"
              />

            </a>
            </div>

            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
                <ul className="navbar-nav ml-auto">
                  {menuItems?.items.map(
                    (d, i) =>
                      !d.hide && (
                        <li key={i} className="nav-item">
                          <a  className="nav-link" key={i+1}   onClick={() => router.push("/" + d.url)}>
                            {d.title}
                          </a>
                        </li>
                      )
                  )}
                </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
