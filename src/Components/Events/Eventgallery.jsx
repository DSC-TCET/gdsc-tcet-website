/* eslint-disable */

import React from "react";
import { Container } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import IconButton from "@mui/material/IconButton";
import EventList from "./EventList";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Eventgallery() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#f3f6f7",
      }}
    >
      <Container style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
        <motion.div
          id='slider'
          className=''
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            pagination={{ clickable: true }}
            navigation
          >
            {EventList.map((item) => {
              const { id, imageurl, title } = item;
              return (
                <SwiperSlide key={id}>
                  <div
                    style={{
                      height: "450px",
                      backgroundColor: "rgba(0,0,0,0.1)",
                      boxSizing: "content-box",
                    }}
                    className='relative py-5 flex items-center justify-center rounded-lg'
                  >
                    <div
                      className='h-full rounded-xl overflow-hidden inline-block shadow-lg cursor-pointer active:scale-95 transition'
                      onClick={() => navigate(`/events/${id}`)}
                    >
                      <img
                        src={imageurl}
                        alt={title}
                        className='h-full object-contain object-center'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </Container>
    </div>
  );
}

export default Eventgallery;
