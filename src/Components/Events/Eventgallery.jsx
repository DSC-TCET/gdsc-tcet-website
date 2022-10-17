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
import useWindowDimensions from "../../getWindowDimensions";

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

  const { width } = useWindowDimensions();

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
              const { id, imageurl, title, description } = item;

              return (
                <SwiperSlide key={id}>
                  <div
                    style={{
                      height: width > 1024 ? "450px" : "",
                      backgroundColor: "rgba(0,0,0,0.05)",
                      boxSizing: "content-box",
                    }}
                    className={`relative ${
                      width > 1024 ? "p-20" : "p-5"
                    } flex items-center justify-center rounded-xl`}
                  >
                    <div
                      className='lg:grid flex flex-col grid-cols-2 bg-white rounded-lg cursor-pointer shadow-md'
                      onClick={() => navigate(`/events/${id}`)}
                    >
                      <div className='h-96 w-full lg:rounded-l-xl xs:rounded-t-xl overflow-hidden'>
                        <img
                          src={imageurl}
                          alt={title}
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div
                        className={`${width > 765 && "p-5"} border-l-2`}
                        style={{ padding: 30 }}
                      >
                        <h1 className='text-neutral-800 mb-5 lg:text-4xl md:text-3xl'>
                          {title}
                        </h1>
                        <p className='text-lg xl:line-clamp-6 line-clamp-2'>
                          {description}
                        </p>
                      </div>
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
