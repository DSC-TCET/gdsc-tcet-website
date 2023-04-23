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
          <Col style={{ padding: '0 6rem' }} md={12} sm={12} lg={6}>
            <Card
              className={classes.Card}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={upeve}
                style={{ backgroundImage: 'linear-gradient(to right, #6366f1, #a855f7)' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Control + Alt + Explore
                </Typography>
                <Typography variant="body1" color="text.primary">
                  17 May 2023
                </Typography>
                <br />
                <Typography variant="body1" color="text.secondary">
                  A one-of-a-kind event that aims to provide attendees with valuable
                  information about various tech opportunities & network with experts.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  rel="noreferrer"
                  href="https://lu.ma/ctrl-alt-explore"
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
              It is a one-of-a-kind event that aims to provide attendees with
              valuable information about summer opportunities. This
              event is designed to help students, professionals, and other interested
              individuals learn about the various summer programs, internships, and
              other opportunities that are available to them.
            </Typography>
            <br />
            {/* <Typography variant="h6" color="text.primary">
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
            </Typography> */}
          </Col>
          <br />
        </Row>
      </Container>
    </div>
  );
}

export default UpcomingEvent;
