/* eslint-disable */

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import tcet from "../Images/tcet.jpg";

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
            <h1 id='aboutustitle'>About TCET</h1>
            <br />
            <p id='aboutustext'>
              Thakur College of Engineering and Technology (TCET) is situated in
              Kandivali, Mumbai. An autonomous institute established in 2001.
              The institute trains students in engineering and technology at
              certificate, diploma, degree, post-graduate and doctoral levels.
            </p>
            <div id='aboutusbutton'>
              <Button
                target='_blank'
                rel='noreferrer'
                href='https://tcetmumbai.in/'
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
