/* eslint-disable */

import React, { useEffect } from "react";
import Aboutus from "./Aboutus";
import Abouttcet from "./Abouttcet";
import UpcomingEvent from "./UpcomingEvent";
import Discord from "./Discord";
import Stats from "./Stats";
import Sponsor from "./Sponsor";
import "./home.css";
import Eventgallery from "../Events/Eventgallery";
import ScrollToTop from "react-scroll-to-top";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Eventgallery />
      <div data-aos='fade-down'>
        <Abouttcet />
      </div>
      <Stats />
      <div data-aos='zoom-in'>
        <UpcomingEvent />
      </div>
      <div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
        <Sponsor />
      </div>
      <Discord />
      <ScrollToTop />
    </div>
  );
}

export default Home;
