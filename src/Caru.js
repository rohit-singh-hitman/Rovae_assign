import React,{Component} from "react";

import Carousel from 'react-elastic-carousel'
import car from "./data";
import Cards from './Cards'



function Caru(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 7 },
    { width: 1150, itemsToShow: 7, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 7 },
    { width: 1750, itemsToShow: 7 },
  ]
  return (
    <>
     <Carousel breakPoints={breakPoints}>
    {car.map((val, ind) => {
    return (
      <Cards img={val.src} title={val.title} key={ind} details={val.details} />
    );
  })}
  </Carousel>
  </>
  )
}
export default Caru;