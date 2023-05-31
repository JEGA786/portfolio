import "../AboutMe/About.css";
export function AboutMe() {
  return (
    <div className="heading text-center">
      <p className=" p-0 m-0">Get To Know</p>
      <h2 className="">About Me</h2>
      <div className="col-12 ">
        <div className="row m-0 p-0">
          <div className="col-lg-6  col-md-12 col-12"> j</div>
          <div className="col-lg-6  col-md-12 col-12 ">
            <div className="boxs d-flex row justify-content-center">
              <div className="bg-info mx-md-3 col-lg-5  mt-lg-0 mt-md-0 col-md-5 col-9  text-center d-flex flex-column justify-content-center align-items-center">
                <i className="fa-sharp fa-solid fa-medal fa-fade fs-3 p-2"></i>
                <h5>Expriance</h5>
                <p className="col-9 col-xs-2 fw-light">
                  1+ Year Of Expriencing{" "}
                </p>
              </div>
              <div className="bg-info mx-md-3 mt-3 mt-lg-0 mt-md-0 col-lg-5 col-md-5 col-9  text-center d-flex flex-column justify-content-center align-items-center">
                <i className="fa-sharp fa-solid fa-list-check fa-fade  fs-3 p-2"></i>
                <h5>Project</h5>
                <p className="col-9 col-xs-2 fw-light">5+ completed</p>
              </div>
              <p className="text-start mt-2 lh-lg col-12 col-lg-11  col-md-11  text-lg-start text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt eaque impedit maxime quidem dignissimos ratione, dolor,
                soluta fugit harum quo ab accusamus nisi beatae eum dolorem
                cumque hic. Aperiam, sed.Lorem ipsum, dolor sit amet consectetur
                adipisicing
              </p>
            </div>
            <div className="d-flex justify-content-center  justify-content-lg-start  col-12 col-lg-9  col-md-9 mx-0 mx-md-3 mx-lg-3">
              <button
                type="button"
                className="btn btntwo btn-outline-info text-dark"
              >
                LETS TALK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
