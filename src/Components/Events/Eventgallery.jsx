import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import {
  Container, Row, Button, Col,
} from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EventList from './EventList';
import galleryList from './GalleryList';
import classes from './EventGallery.module.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Eventgallery() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      style={{
        backgroundColor: '#f3f6f7',
      }}
    >
      <Container style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <h1
          style={{ textAlign: 'center' }}
          id="eventgallerytitle"
          className="mb-5 pt-6"
        >
          Event Gallery
        </h1>
        <Row style={{ paddingBottom: '3vh' }}>
          <MDBCarousel
            showIndicators
            showControls
            fade
            style={{ height: '100%' }}
          >
            {galleryList.map((item, index) => {
              const { id, img, title } = item;
              return (
                <MDBCarouselItem
                  itemId={id}
                  className="w-100 d-block object-cover"
                  src={img}
                  key={index}
                  alt="..."
                >
                  <h5
                    className="text-xl inline-block py-1 px-3 rounded-lg"
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                  >
                    {title}
                  </h5>
                  <div
                    id="bg-info"
                    className="absolute translate-x-20 rounded-lg right-1/2 h-5 w-40"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      bottom: '-2.5px',
                    }}
                  />
                </MDBCarouselItem>
              );
            })}
          </MDBCarousel>
        </Row>

        <br />
        <br />
        <div data-aos="fade-down">
          <h1 style={{ textAlign: 'center' }} id="eventgallerytitle">
            Our Past Events
          </h1>
          <br />
          <br />
          <Row>
            {EventList.map((item, index) => (
              <Col style={{ paddingBottom: '3vh' }} md={12} sm={12} lg={4}>
                <Card
                  className={classes.card}
                  key={index}
                >
                  <CardHeader title={item.title} subheader={item.date} />
                  <CardMedia
                    component="img"
                    className={classes.img}
                    image={item.imageurl}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button
                      rel="noreferrer"
                      href={item.url}
                      target="_blank"
                      style={{ fontSize: '1em', marginLeft: '0.5em' }}
                      variant="primary"
                    >
                      Know More
                    </Button>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>What was done:</Typography>
                      <Typography paragraph>
                        <ul>
                          <li>{item.agenda1}</li>
                          <li>{item.agenda2}</li>
                          <li>{item.agenda3}</li>
                          <li>{item.agenda4}</li>
                        </ul>
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Eventgallery;
