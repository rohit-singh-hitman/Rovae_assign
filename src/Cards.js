import React from "react";
import car from "./data";
import Carousel from "react-material-ui-carousel";
const Cards = (props) => {
  return (
    <>
      <div className="col-md-2 col-10">
        <div class="card" style={{ width: "15rem", height: "36rem" }}>
          <img
            class="card-img-top"
            src={props.img}
            alt="Card image cap"
            width="151px"
          />
          <div class="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.details}</p>
            <button className="butyy">
              <i class="fas fa-chevron-right" style={{ fontSize: "1rem" }}></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
