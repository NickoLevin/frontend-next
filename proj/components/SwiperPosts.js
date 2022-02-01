import React from "react";
import {Carousel} from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import { height } from "@mui/system";

function SwiperPosts() {

  return (
    <div >
      <Carousel  className="d-block w-40" >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./full_2.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./full.jpeg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./full_2.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Lorem Ipsum</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default SwiperPosts;
