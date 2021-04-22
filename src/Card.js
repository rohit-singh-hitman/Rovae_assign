import React, { Component } from "react";
import python from "./Images/Website Illustrations 3.png";
import software from "./Images/Website Illustrations 1.png";
import Mobile from "./Images/Website Illustrations 2.png";
import analysis from "./Images/Website Illustrations 4.png";
import data from "./Images/Website Illustrations 5.png";
import big from "./Images/Website Illustrations 6.png";
import b from "./Images/Website Illustrations 7.png";
import cal from './Images/Group.png'
import Carousel from "react-elastic-carousel";
import { Calendar } from "antd";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 7 },
      { width: 1150, itemsToShow: 7, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 7 },
      { width: 1750, itemsToShow: 7 }
    ];
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-10 ">
            <div className="row">
              <div className="col-md-6 col-10 peace">
                <h3>Your peace of mind is our number one priority.</h3>
                <p>
                  UniversaCare offers a range of services for in-home care. We
                  are your partners in care, and work with you to come up with a
                  plan of action.
                </p>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={python}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Hourly Home care</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={software}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Personal Care</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={Mobile}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Private Nursing</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={analysis}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Respite Care</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={data}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Life-in Aid</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={big}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Memory Care</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col- 10 show1">
                <div class="card" style={{}}>
                  <img
                    class="card-img-top"
                    src={b}
                    alt="Card image cap"
                    width="151px"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Memory Care</h5>
                    <p className="card-text">
                      4x higher coverage limit than traditional policies for
                      computers and home office equipment.
                    </p>
                    <button className="butyy">
                      <i
                        class="fas fa-chevron-right"
                        style={{ fontSize: "1rem" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>

              <Carousel breakPoints={this.breakPoints} className="show">
                <div className="col-md-2 col- 10 ">
                  <div class="card cardd" style={{}}>
                    <img
                      class="card-img-top"
                      src={python}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Hourly Home care</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col- 10 ">
                  <div class="card" style={{}}>
                    <img
                      class="card-img-top"
                      src={software}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Personal Care</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col- 10 ">
                  <div class="card" style={{}}>
                    <img
                      class="card-img-top"
                      src={Mobile}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Private Nursing</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col- 10 ">
                  <div class="card" style={{}}>
                    <img
                      class="card-img-top"
                      src={data}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Respite Care</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col- 10 ">
                  <div class="card" style={{}}>
                    <img
                      class="card-img-top"
                      src={big}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Life-in Aid</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col- 10 ">
                  <div class="card" style={{}}>
                    <img
                      class="card-img-top"
                      src={b}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Memory Care</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col- 10 ">
                  <div class="card" style={{}}>
                    <img
                      class="card-img-top"
                      src={analysis}
                      alt="Card image cap"
                      width="151px"
                    />
                    <div class="card-body">
                      <h5 className="card-title">Memory Care</h5>
                      <p className="card-text">
                        4x higher coverage limit than traditional policies for
                        computers and home office equipment.
                      </p>
                      <button className="butyy">
                        <i
                          class="fas fa-chevron-right"
                          style={{ fontSize: "1rem" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Carousel>
              <div className="col-md-4 col- 10 " style={{}}>
                <div
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <img src={cal} alt="call" style={{ width: "80px" }} />
                  <div className="card-body">
                    <h5 className="card-title">Do You Need Support</h5>
                    <h6
                      className="card-text"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      We Glad To Help !
                    </h6>
                    <a
                      href="/About"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        border: "none"
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#0047AB",
                          color: "#fff",
                          borderRadius: "2px"
                        }}
                      >
                        Contact Me
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
