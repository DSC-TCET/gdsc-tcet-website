import React from "react";
import { Container, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
function Sponsor() {
  return (
    <div style={{ background: "#f7f7f9", paddingBottom: "5vh" }}>
      <Container>
        <Col>
          <h1 style={{ textAlign:"center",fontSize: "4em" }}>Our Sponsors</h1>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#050c13" }}
          >
            Thank you to our sponsors for their generous support
          </Typography>
          <br />
          <br />
          <h1 style={{ textAlign: "center",color: "#55e8dd" }}>Give My Certificate</h1>
          <div style={{ textAlign: "center" }}>
            <img
              alt="Give My Certificate"
              width="15%"
              height="auto"
              src="https://github.com/DSC-TCET/Assets/blob/main/image/sponsors/GMC%20LogoS.png?raw=true"
            />
            <h2 style={{ color: "#161b22" }}>(Our Certificate Partner)</h2>
            <br />
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default Sponsor;
