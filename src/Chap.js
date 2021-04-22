import React from "react";
import C1 from './Images/Chaps.png'
const Chap = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row ">
              <div className="col-md-4 col-10 chao">
                <img src={C1} alt="" />
              </div>
              <div className="col-md-8 col-10 chap">
                <h1> CHAP Accreditation and this line can be this big</h1>
                <p>
                  UniversaCare, LLC will provide the following home health care
                  programs at flexible schedules and cost-friendly service
                  rates.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chap;
