import { Row, Col } from "antd";
import React from "react";
import car from "./data";
import { Card } from "antd";
import Cards from "./Cards";
const { Meta } = Card;
import Carouse from "./Carousel";
import Caru from "./Caru";
const card = () => {
  return (
    <>
      <div className="container-fluid rama">
        <div className="row">
          <div className="col-md-10 col-offset-md-2 col-10 col-offset-2">
            <div className="row">
              <div className="col-md-6 col-10 peace">
                <h3>Your peace of mind is our number one priority.</h3>
                <p>
                  UniversaCare offers a range of services for in-home care. We
                  are your partners in care, and work with you to come up with a
                  plan of action.
                </p>
              </div>

              <Caru />

              <div className="col-md-4 col-10" style={{display:'flex',justifyContent:'center'}}>
                <div className="card" style={{ width: "30rem" }}>
                <i class="fas fa-phone-square-alt" style={{fontSize:'10rem',display:'flex',justifyContent:'center'}}></i>
                  <div className="card-body">
                    <h5 className="card-title">Do You Need Support</h5>
                    <h6 className="card-text">We Glad To Help !</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default card;
