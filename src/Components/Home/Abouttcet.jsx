/* eslint-disable */

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tcet from "../Images/gdsc-event.jpeg";

function Abouttcet() {
  return (
    <div style={{ backgroundColor: "#f3f6f7" }}>
      <Container>
        <Row style={{ paddingBottom: "10vh" }}>
          <Col md={12} sm={12} lg={6}>
            <img
              width='100%'
              height='auto'
              src={tcet}
              alt='tcet'
              style={{ paddingTop: "5vw" }}
            />
          </Col>
          <Col md={12} sm={12} lg={6} style={{ marginTop: "5vw" }}>
            <h1 id='aboutustitle'>About GDSC</h1>
            <br />
            <p id='aboutustext'>
            <p>GDSC TCET (Google Developer Student Clubs TCET) is a student community affiliated with Google that aims to foster collaboration, learning, and innovation among the students. GDSC TCET is part of the larger Google Developer Student Clubs program, which exists in universities and colleges around the world.<br></br></p>

            <p>The primary goal of GDSC TCET is to provide a platform for students to develop their technical skills, explore new technologies, and gain practical experience in various fields of computer science and engineering. The club organizes workshops, coding competitions, hackathons, tech talks, and other events to facilitate knowledge sharing and skill-building.</p>
            </p>
            <div id='aboutusbutton'>
              <Button
                target='_blank'
                rel='noreferrer'
                href='https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai/'
                size='lg'
                variant='info'
              >
                More Info
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Abouttcet;
