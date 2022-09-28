/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Eventgallery from "./Components/Events/Eventgallery";
import Team from "./Components/Team/Team";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Header />
      <ScrollToTop
        component={<ArrowUpwardIcon />}
        style={{ backgroundColor: "#4086f4" }}
        smooth
        color='white'
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='events' element={<Eventgallery />} />
        <Route path='team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
