/* eslint-disable */

import React from "react";
import Aboutus from "./Aboutus";
import Abouttcet from "./Abouttcet";
import UpcomingEvent from "./UpcomingEvent";
import Discord from "./Discord";
import Stats from "./Stats";
import Sponsor from "./Sponsor";
import "./home.css";
import Eventgallery from "../Events/Eventgallery";
import Landing from "../Landing/Landing";
import EventImages from "./EventImages";


function Home() {
  return (
    <div>
      <Landing />
      <div style={{ backgroundColor: "#F3F6F7" }} className='-translate-y-10'>
        <h1 className='text-center sm:text-5xl text-4xl text-black'>
          Notable Events
        </h1>
        <Eventgallery />
        <div data-aos='fade-down'>
          <Abouttcet />
        </div>
        <div data-aos='zoom-in'>
          <EventImages />
        </div>
        <Stats />
        <div data-aos='zoom-in'>
          <UpcomingEvent />
        </div>
        <div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
          <Sponsor />
        </div>
        <Discord />
      </div>
    </div>
  );
}

export default Home;