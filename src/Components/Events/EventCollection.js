/* eslint-disable */

import { Container } from "@mui/system";
import React from "react";
import EventCard from "./EventCard";
import EventList from "./EventList";

const EventCollection = () => {
  return (
    <Container className='grid grid-cols-6 gap-8'>
      {EventList.map((item, i) => {
        const { title, date, imageurl: imageUrl, description, id } = item;
        return (
          <EventCard title={title} desc={description} img={imageUrl} id={id} />
        );
      })}
    </Container>
  );
};

export default EventCollection;
