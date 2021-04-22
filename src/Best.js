import React from "react";
import p1 from './Images/Frame 311.png'
import p2 from './Images/Frame 313.png'
import p3 from './Images/Frame 314.png'
import p4 from './Images/Frame 315.png'
const Best = () => {
  return (
    <>
      <div className="container-fluid best">
        <div className="Best_title">
          <h1>
            How We Find <span>Best Careviger</span> For You
          </h1>
        </div>

        <div className="row">
          <div className="col-md-10 col-10 mx-auto">
            <div className="row best_1">
              <div className="col-md-3 col-10">
                <div class="img_1">
                  <img src={p1} alt="" />
                </div>
                <h1>1. Initial Consultation</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget augue nec massa volutpat aliquam fringilla non.
                </p>
              </div>
              <div className="col-md-3 col-10">
                <div class="img_1">
                  <img src={p2} alt="" />
                </div>
                <h1>2. Customized Care Plan</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget augue nec massa volutpat aliquam fringilla non.
                </p>
              </div>
              <div className="col-md-3 col-10">
                <div class="img_1">
                  <img src={p3} alt="" />
                </div>
                <h1>3. Caregiver Matching</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget augue nec massa volutpat aliquam fringilla non.
                </p>
              </div>
              <div className="col-md-3 col-10">
                <div class="img_1">
                  <img src={p4} alt="" />
                </div>
                <h1>4. Ongoing Support and Supervision</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget augue nec massa volutpat aliquam fringilla non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Best;
