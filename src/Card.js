import { Row, Col } from "antd";
import React from "react";
import car from "./data";
import { Card } from "antd";
import Cards from "./Cards";
const { Meta } = Card;
import Carouse from "./Carousel";
import Caru from "./Caru";
import cal from './Images/Group.png'
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

              <div
                className="col-md-4 col-10"
                style={{  }}
              >
                <div className="card" style={{ width: "30rem" ,display: "flex",flexDirection:'column',alignItems:'center',}}>
                  <img src={cal} alt="call" style={{width:'80px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Do You Need Support</h5>
                    <h6 className="card-text" style={{display:'flex',justifyContent:'center'}}>We Glad To Help !</h6>
                    <a href="/About" style={{display:'flex',justifyContent:'center',border:'none'}}>
              <button style={{backgroundColor:'#0047AB',color:'#fff',borderRadius:'2px'}}>Contact Me</button>
            </a>
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
