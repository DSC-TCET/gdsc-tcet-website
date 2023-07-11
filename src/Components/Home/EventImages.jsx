/* eslint-disable */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useMediaQuery } from "react-responsive";
import './Eventimages.css';
import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';
import image4 from '../Images/img4.jpg';
import image5 from '../Images/img5.jpg';

function EventImages() {
  const isMobile = useMediaQuery({query: "(max-width: 650px)"});
  return (
    <Carousel
    autoPlay={true}
    interval={2000}
    controls={false}
    fade={true}
    className="carousel"
    >
      <Carousel.Item className="carousel-item">
      <div className="col items-center justify-center">
        <img
          className="img"
          src={image1}
          style={{ 
            margin: 'auto',
            width: isMobile? "20rem": "46rem",
            height: isMobile? "10rem": "30rem",
          }}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Postman Event</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image2}
          className="img"
          style={{ 
          margin: 'auto',
          width: isMobile? "20rem": "46rem",
          height: isMobile? "10rem": "30rem", 
        }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jetpack Compose Camp</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="col items-center justify-center">
        <img
        className="img"
          src={image3}
          style={{ margin: 'auto',
          width: isMobile? "20rem": "46rem",
          height: isMobile? "10rem": "30rem", }}
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Design Day</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="col items-center justify-center">
        <img
        className="img"
          src={image4}
          style={{ margin: 'auto',
          width: isMobile? "20rem": "46rem",
          height: isMobile? "10rem": "30rem", }}
          alt="Fourth slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Flutter Event</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="col items-center justify-center">
        <img
        className="img"
          src={image5}
          style={{ margin: 'auto',
          width: isMobile? "20rem": "46rem",
          height: isMobile? "10rem": "30rem", }}
          alt="Fifth slide"
        />
        </div> 
        <Carousel.Caption>
          <h3>Tensorflow Event</h3>
          
        </Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
    
  );
}

export default EventImages;
