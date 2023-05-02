import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Eventimages.css';
import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';

function EventImages() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={image1}
          width="70%"
          height="30%"
          style={{ margin: 'auto' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Event 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image2}
          width="70%"
          height="30%"
          style={{ margin: 'auto' }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Event 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image3}
          width="70%"
          height="30%"
          style={{ margin: 'auto' }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Event 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default EventImages;
