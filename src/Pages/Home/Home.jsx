import React, {useContext, useEffect, useState} from "react";

import PopularClass from "../../Components/PopularClass";
import PopularInstructor from "../../Components/PopularInstructor";
import {Fade} from "react-awesome-reveal";
import FacilitiesSchedule from "./FacilitiesSchedule";
import {Helmet} from "react-helmet-async";
import {ThemeContext} from "../../Provider/ThemeProvider";
import HomeSlider from "./HomeSlider";
import Reviews from "./Reviews";
import TotalBanner from "./TotalBanner";
import CampingTypes from "./CampingTypes";
import About from "./About";

// bg-[#F5F5F5]
const Home = () => {
  const {theme} = useContext(ThemeContext);
  const textColorClass =
    theme === "light"
      ? "text-teal-700  bg-black"
      : "text-green-300 bg-teal-950";
  return (
    <>
      <Helmet>
        <title>Craftopia | Home</title>
      </Helmet>
      <Fade>
        <div>
          {/* <Slider /> */}
          <HomeSlider />
          <About />
          <TotalBanner />
          <CampingTypes />
          <PopularClass col={textColorClass} />
          <FacilitiesSchedule></FacilitiesSchedule>
          <PopularInstructor />

          <Reviews />
        </div>
      </Fade>
    </>
  );
};

export default Home;
