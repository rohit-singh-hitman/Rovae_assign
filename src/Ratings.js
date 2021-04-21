import React from "react";
import { Card } from "antd";
import Rating_car from "./Rating_Car";
import Carousel from "react-elastic-carousel";

const Rating = () => {
  return (
    <>
      <div className="container-fluid ratings">
        <div className="row">
          <div className="col-md-10  col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mb-5">
                <h1>5.0</h1>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <p>2,054 verified customers reviews by Google.</p>
              </div>
              <div className="col-md-8 col-12 mx-auto">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <h3>Alvin Stanley</h3>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <p>
                        Great company to work for! This organization cares for
                        its team of caregivers, office employees, and clients.
                        There is always someone available to pick up the phone
                        when you need help.
                      </p>
                    </div>
                    <div class="carousel-item">
                      <h3>Alvin Stanley</h3>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <p>
                        Great company to work for! This organization cares for
                        its team of caregivers, office employees, and clients.
                        There is always someone available to pick up the phone
                        when you need help.
                      </p>
                    </div>
                    <div class="carousel-item">
                      <h3>Alvin Stanley</h3>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <p>
                        Great company to work for! This organization cares for
                        its team of caregivers, office employees, and clients.
                        There is always someone available to pick up the phone
                        when you need help.
                      </p>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon" 
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rating;
