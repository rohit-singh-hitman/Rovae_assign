import "./styles.css";
import car from "./data";
import Cards from "./Cards";
import Header from "./Header";
import Insta from "./Insta";
import Chap from "./Chap";
import Navbar from "./Navbar";
import Best from "./Best";
import Health from "./Health";
import Card from "./Card";
import Rating from "./Ratings";
import Carouse from "./Carousel";
//import { Card } from "antd";
import Footer from "./Footer";
import MultiCarouselPage from "./Muti";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Best />
      <Chap />
      <Rating />
      <Insta />
      <Health />
      <Footer />
    </>
  );
}
