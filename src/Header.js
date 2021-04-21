import React from "react";

const Header = () => {
  return (
    <>
      <div className="container-fluid main_head">
        <div className="row ">
          <div className="col-md-6 col-12 main_header_left">
            <h1>The future of health care is Home Care</h1>
            <p>over a decade of trusted care</p>

            <a href="/About">
              <button>Request an appointment</button>
            </a>
          </div>
          <div className="col-md-6 col-12 main_header_right align-items-center">
            <img
              src="../images/Vector 1.jpg"
              alt="rohit"
              className="img-fluid"
              title="rohit"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid location">
        <h5>
          <i className="fas fa-map-marker-alt"></i>Universacare areas of
          coverage
        </h5>
      </div>
    </>
  );
};
export default Header;
