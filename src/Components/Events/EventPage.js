/* eslint-disable */

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventList from "./EventList";
import { useEffect } from "react";
import { Container } from "@mui/system";
import { motion } from "framer-motion";

const EventPage = () => {
  const { id } = useParams();
  const [backHovered, setBackHovered] = useState(false);
  const [found, setFound] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let found = EventList.find((item) => item.id === Number(id));
    setFound(found);
  }, []);

  return (
    <Container
      maxWidth='md'
      className='flex flex-col gap-5 items-start py-16 pb-32'
    >
      <button
        className='flex justify-center items-center gap-2 py-2 pr-4'
        onMouseOver={() => setBackHovered(true)}
        onMouseLeave={() => setBackHovered(false)}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon
          className={` ${
            backHovered ? "text-blue-500" : "text-black"
          } transition`}
        />
        <span
          className={`text-xl ${
            backHovered ? "text-blue-500" : "text-black"
          } transition`}
        >
          Back
        </span>
      </button>
      <div className='flex flex-col gap-4 -mt-1'>
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "easeIn",
            stiffness: 100,
            delay: 0.1,
            duration: 0.5,
          }}
        >
          <h1 className='text-black md:text-6xl sm:text-5xl text-4xl font-normal'>
            {found.title}
          </h1>
        </motion.div>
        <span className='text-blue-500'>{found.date}</span>
      </div>
      <div className='w-full flex items-center justify-center'>
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "easeIn",
            stiffness: 100,
            delay: 0.4,
            duration: 0.5,
          }}
          className='rounded-xl overflow-hidden'
        >
          <img
            src={found.imageurl}
            className='object-contain object-center'
            alt={found.title}
          />
        </motion.div>
      </div>
      <div>
        <p className='text-xl font-normal text-stone-800'>
          {found.description}
        </p>
        {found.agenda1 && (
          <ul className='list-disc'>
            <li>{found.agenda1}</li>
            <li>{found.agenda2}</li>
            <li>{found.agenda3}</li>
            <li>{found.agenda4}</li>
          </ul>
        )}
      </div>
    </Container>
  );
};

export default EventPage;
