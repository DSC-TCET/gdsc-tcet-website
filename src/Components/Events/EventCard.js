/* eslint-disable */

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EventCard = ({ title, desc, navto, img, id }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ width: "100%" }}
      className={`lg:col-span-2 sm:col-span-3 col-span-6`}
      onClick={() => navigate(`/events/${id}`)}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={img}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            className='line-clamp-2'
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EventCard;
