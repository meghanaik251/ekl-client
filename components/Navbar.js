function Navbar(props) {
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
        <nav class="navbar navbar-expand-lg py-3 navbar-light bg-light ">
          <div class="container">
            <a href="#" class="navbar-brand">
              <img
                src={props.src}
                height={props.height}
                width={props.width}
                alt=""
                class="d-inline-block align-middle mr-2"
              />
            </a>

            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    TRAINING
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    CONTACT
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
