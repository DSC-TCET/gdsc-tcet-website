/* eslint-disable */
import React from "react";
import landingImg from "../Images/gdsc-landing1.png";

const Landing = () => {
  return (
    <div
      className='h-screen px-4 pt-4 pb-32'
      style={{ backgroundColor: "#F3F6F7" }}
    >
      <div className='h-full relative rounded-xl overflow-hidden'>
        <div className='w-full h-full overflow-hidden'>
          <img
            src={landingImg}
            alt='gdsc-landing'
            className='w-full h-full object-cover'
          />
        </div>
        <div
          className='absolute top-0 h-full w-full flex flex-col items-center justify-center text-white gap-2 text-center'
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <h1 className='sm:text-7xl text-5xl'>
            <span style={{ color: "#E84435" }}>G</span>
            <span style={{ color: "#2376E5" }}>D</span>
            <span style={{ color: "#089D57" }}>S</span>
            <span style={{ color: "#F6BA17" }}>C</span> -{" "}
            <span className='text-amber-400'>TCET</span>
          </h1>
          <p className='sm:text-xl text-base px-1'>
            Google Developer Students Club - Thakur College of Engineering and
            Technology
          </p>
          <p className='sm:text-2xl text-xl font-semibold text-sky-500'>
            Learn . Connect . Grow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
