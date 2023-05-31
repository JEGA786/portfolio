import React from "react";
import "../Homepage/Home.css";

export function Homepage() {
  return (
    <div className="home-container ">
      <div className="homepage col-12 ">
        <div className="row   d-flex justify-content-between">
          <div className="col-lg-7 col-md-7 col-12 m-0 p-0">
            <div className="d-flex h-100 text-center  justify-content-center  align-items-center">
              <div className="homealltext col-lg-10 col-xs-12  m-0 p-0">
                <h1>
                  Hello,i am <span className="text-info">JEGA</span>
                </h1>
                <h5 className="roal">UI/UX designer & web developer</h5>
                <p>
                  I've been doing web design, front-end and back-end development
                  for a year now. Do you need a website de, site layout, or
                  maybe a turnkey website? Then contact me
                </p>

                <button type="button" className="btn btnone btn-info">
                  Downlode
                </button>
                <button
                  type="button"
                  className="btn btntwo btn-outline-info text-dark mx-3"
                >
                  Talk
                </button>
              </div>
            </div>
          </div>

          <div className="imagediv col-lg-5 col-md-5   col-sm-0 col-xs-12 m-0 p-0 col-xs-to">
            <img
              className="object-fit-fill"
              src={require("../../../asset/jegahome.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
