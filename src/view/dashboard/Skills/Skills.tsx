import "../Skills/Skills.css";
export function Skills() {
  return (
    <div>
      <div className="heading text-center my-4">
        <p className=" p-0 m-0 ">Get To Know</p>
        <h2 className="">Skills</h2>
      </div>

      <div className="progress-div col-12   d-flex flex-column justify-content-center">
        <div className="col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/figma.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-3 col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/sketch.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-3 col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/phottoshope.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-3 col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/html.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-3 col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/css.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-3 col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/javascript.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-3 col-lg-11 col-mg-11 col-sm-11  m-0 p-0 d-flex  justify-content-lg-center justify-content-md-center justify-content-sm-center justify-content-around align-items-center">
          <div className="progress col-lg-8 col-md-8 col-sm-6 col-8  bg-dark">
            <div className="inprogress bg-info  rounded"></div>
          </div>
          <div className="percentage mx-lg-5 mx-md-5 mx-sm-5 mx-2  ">75%</div>
          <div className="img-div  col-lg-1 col-sm-2 col-md-1 col-xs-3">
            <div className="">
              <img
                className="object-fit-contain"
                src={require("../../../asset/react.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
