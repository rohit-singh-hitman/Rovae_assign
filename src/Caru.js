import React from "react";
import Carousel from "react-material-ui-carousel";


import car from "./data";

import Cards from "./Cards";

function Caru(props) {
  return (
    
    
        car.map((val, ind) => {
        return (
          <Cards
            img={val.src}
            title={val.title}
            key={ind}
            details={val.details}
          />
        );
      })
   


  );
}
export default Caru;


