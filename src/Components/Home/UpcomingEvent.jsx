import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import upeve from '../Images/upcomingevent.jpeg';
import classes from './UpcomingEvent.module.css';

function UpcomingEvent() {
  return (
    <div style={{ paddingTop: '5vw', background: '#f7f7f9' }}>
      <Container>
        <h1 style={{ paddingTop: '5vw', textAlign: 'center' }}>Upcoming Event</h1>
        <br />
        <Row style={{ paddingBottom: '15vh' }}>
          <Col style={{ paddingBottom: '5vh' }} md={12} sm={12} lg={6}>
            <Card
              className={classes.Card}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={upeve}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Android Study Jams
                </Typography>
                <Typography variant="body1" color="text.primary">
                  29 November to 10 December
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                  Discover and unleash the Android power with our 6 Week-long
                  Learning + Hands-on development Bootcamp.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  rel="noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdHOZHy1iTn1sH_zm3E4p8pdqvBh6UV82NYwJLLUwPybClZVg/viewform"
                  target="_blank"
                  style={{
                    fontSize: '1em',
                    color: 'black',
                    marginLeft: '0.5em',
                  }}
                  variant="warning"
                >
                  Get RSVP &nbsp;
                  <ConfirmationNumberIcon />
                </Button>
              </CardActions>
            </Card>
          </Col>
          <br />
          <Col style={{ paddingBottom: '5vh' }} md={12} sm={12} lg={6}>
            <Typography variant="h5" color="text.secondary">
              Participate in the upcoming competition to win goodies and get a
              chance to receive mentorship from Google😍 and get their
              guidance/help to improve your App
            </Typography>
            <br />
            <Typography variant="h6" color="text.primary">
              Learn:
            </Typography>
            <Typography variant="subtitle1">
              <ul>
                <li>Kotlin Basics</li>
                <li>Data Persistence</li>
                <li>Layouts </li>
                <li>Navigation</li>
                <li>Work Manager</li>
                <li>Connect to the Internet</li>
              </ul>
            </Typography>
          </Col>
          <br />
        </Row>
      </Container>
    </div>
  );
}

export default UpcomingEvent;
