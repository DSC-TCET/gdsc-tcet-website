/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Discord() {
  return (
    <div>
      <Container>
        <br />
        <h1 style={{ textAlign: 'center', fontSize: '3em' }}> Join and Learn with us on Discord!</h1>
        <br />
        <Row
          style={{
            display: 'block',
            margin: 'auto',
            maxWidth: '80%',
            paddingBottom: '5vw',
          }}
        >
          <iframe
            title="GDSC TCET Discord"
            src="https://discord.com/widget?id=883673700279398450&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </Row>
      </Container>
    </div>
  );
}

export default Discord;
