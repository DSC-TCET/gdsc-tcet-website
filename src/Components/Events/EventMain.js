/* eslint-disable */

import React from "react";
import EventCollection from "./EventCollection";
import { motion } from "framer-motion";

const EventMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1 }}
      style={{ backgroundColor: "#f3f6f7" }}
      className='flex flex-col gap-5 py-20'
    >
      <div className='flex flex-col gap-16'>
        <h1 className='text-center text-5xl font-bold text-black'>
          Our Events
        </h1>
        <EventCollection />
      </div>
    </motion.div>
  );
};

export default EventMain;
