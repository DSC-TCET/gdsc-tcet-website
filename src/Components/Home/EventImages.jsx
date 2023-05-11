/* eslint-disable */

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Eventimages.css';
import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';

function EventImages() {
  return (
    <Carousel
    autoPlay={true}
    interval={5000}
    controls={false}
    indicators={false}
    fade={true}
    className="carousel"
    >
      <Carousel.Item className="carousel-item">
        <img
          className="img"
          src={image1}
          style={{ margin: 'auto' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Event 1</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image2}
          className="img"
          style={{ margin: 'auto' }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Event 2</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="img"
          src={image3}
          style={{ margin: 'auto' }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Event 3</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default EventImages;
