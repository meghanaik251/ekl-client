import Link from "next/link";

function Offerings() {
  return (
    <>
      <div className="carouselslider">
        <h4 style={{ color: "black", textAlign: "left", margin: "20px" }}>
          OFFERINGS{" "}
          <a className="viewall" href="/training">
            View all
          </a>
        </h4>

        <div className="carouselslides">
          <br></br>
          <div id="slides__1" className="carouselslide">
            {[1, 2, 3, 4].map((data, i) => (
              <div className="item col-md-3">
                <div>
                  <div className="img-date">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFG6P_A5kZLZJNRnrMnt162YbkFPGX1kn6oOwXpDORzskzSp1zBK3Y_r9Qympc0Ghpk3I&usqp=CAU"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <a
              className="carouselslide__next"
              href="#slides__2"
              title="Next"
            ></a>
          </div>
          <div id="slides__2" className="carouselslide">
            {[1, 2, 3, 4].map((data, i) => (
              <div className="item col-md-3">
                <div>
                  <div className="img-date">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFG6P_A5kZLZJNRnrMnt162YbkFPGX1kn6oOwXpDORzskzSp1zBK3Y_r9Qympc0Ghpk3I&usqp=CAU"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <a
              className="carouselslide__prev"
              href="#slides__1"
              title="Prev"
            ></a>
            <a
              className="carouselslide__next"
              href="#slides__2"
              title="Next"
            ></a>
          </div>
          <div id="slides__3" className="carouselslide">
            {[1, 2, 3, 4].map((data, i) => (
              <div className="item col-md-3">
                <div>
                  <div className="img-date">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFG6P_A5kZLZJNRnrMnt162YbkFPGX1kn6oOwXpDORzskzSp1zBK3Y_r9Qympc0Ghpk3I&usqp=CAU"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <a
              className="carouselslide__prev"
              href="#slides__1"
              title="Prev"
            ></a>
            <a
              className="carouselslide__next"
              href="#slides__2"
              title="Next"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offerings;
