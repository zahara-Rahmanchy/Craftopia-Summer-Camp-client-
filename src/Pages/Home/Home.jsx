import React from "react";
import Slider from "./Slider";
import PopularClass from "../../Components/PopularClass";
import PopularInstructor from "../../Components/PopularInstructor";
import {Fade} from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade>
      {" "}
      <div>
        <Slider />
        <PopularClass />
        <PopularInstructor />
      </div>
    </Fade>
  );
};

export default Home;
