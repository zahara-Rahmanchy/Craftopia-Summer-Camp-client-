import React, {useContext, useEffect, useState} from "react";

import PopularClass from "../../Components/PopularClass";
import PopularInstructor from "../../Components/PopularInstructor";
import {Fade} from "react-awesome-reveal";
import FacilitiesSchedule from "./FacilitiesSchedule";
import {Helmet} from "react-helmet-async";
import {ThemeContext} from "../../Provider/ThemeProvider";
import HomSlider from "./Slider";
import Slider from "./Slider";
import HomeSlider from "./HomeSlider";
import Reviews from "./Reviews";

const Home = () => {
  const {theme} = useContext(ThemeContext);
  const textColorClass =
    theme === "light"
      ? "text-teal-700 bg-[#FAFAFB]"
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
          <PopularClass col={textColorClass} />
          <PopularInstructor />
          <FacilitiesSchedule></FacilitiesSchedule>
          <Reviews />
        </div>
      </Fade>
    </>
  );
};

export default Home;
