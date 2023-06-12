import React, {useEffect, useState} from "react";
import Slider from "./Slider";
import PopularClass from "../../Components/PopularClass";
import PopularInstructor from "../../Components/PopularInstructor";
import {Fade} from "react-awesome-reveal";
import FacilitiesSchedule from "./FacilitiesSchedule";
import {Helmet} from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Craftopia | Home</title>
      </Helmet>
      <Fade>
        <div>
          <Slider />
          <PopularClass />
          <PopularInstructor />
          <FacilitiesSchedule></FacilitiesSchedule>
        </div>
      </Fade>
    </>
  );
};

export default Home;
