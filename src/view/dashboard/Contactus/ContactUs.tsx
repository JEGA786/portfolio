import "../Contactus/ContactUs.css";
export function ContactUs() {
  return (
    <div className="ContactUs">
      <div className="heading text-center ">
        <p className=" p-0 m-0 ">Get To Know</p>
        <h2 className="">ContactUs</h2>
      </div>
      <div className="loginform-img col-12  bg-danger">
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-md-6 col-12  bg-success">
            <div className="login-form   bg-danger">
              <div className="form">
                <div className="out-line  mt-3 bg-dark d-flex justify-content-center">
                  <input
                    className="col-lg-8 col-md-10 col-sm-8 col-xs-12"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="out-line mt-3 bg-dark d-flex justify-content-center">
                  <input
                    className="col-lg-8 col-md-10 col-sm-8 col-xs-12"
                    type="Email"
                    placeholder="Email"
                  />
                </div>
                <div className="out-line  mt-3 bg-dark d-flex justify-content-center">
                  <textarea
                    className="col-lg-8 col-md-10 col-sm-8 col-xs-12"
                    name="massage"
                    cols={23}
                    rows={10}
                    defaultValue={""}
                    placeholder="Massage"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 bg-dark">j</div>
        </div>
      </div>
    </div>
  );
}
