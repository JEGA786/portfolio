import React from "react";
import { Homepage } from "../Homepage/Home";
import "./Dashboard.styles.css";
import { AboutMe } from "../AboutMe/About";
import { Services } from "../Services/Services";
import { Skills } from "../Skills/Skills";
import { ContactUs } from "../Contactus/ContactUs";
export function Dashboard() {
  return (
    <div className="webpage col-12  p-0 m-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-info ">
        <div className="container ">
          <a className="navbar-brand text-white" href="#">
            JEGA
          </a>
          <button
            className="btn btn-info navbar-toggler border-3 px-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div
            className="offcanvas offcanvas-start-lg bg-info "
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header d-flex d-lg-none">
              <h5
                className="offcanvas-title text-white"
                id="offcanvasExampleLabel"
              >
                JEGA
              </h5>
              <a
                href="javascript:void(0) "
                className="text-reset p-0"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <button className="btn p-1">
                  <i className="fa fa-window-close" aria-hidden="true"></i>
                </button>
              </a>
            </div>
            <div className="offcanvas-body p-lg-0 d-flex justify-content-lg-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Homepage"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#AboutMe">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#Skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#Services"
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#ContactUs"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="Homepage" id="Homepage">
        <Homepage></Homepage>
      </div>
      <div className="AboutMe mt-5" id="AboutMe">
        <AboutMe></AboutMe>
      </div>
      <div className="Skills mt-5" id="Skills">
        <Skills></Skills>
      </div>
      <div className="Services mt-5" id="Services">
        <Services></Services>
      </div>
      <div className="ContactUs mt-5 " id="ContactUs">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
}
