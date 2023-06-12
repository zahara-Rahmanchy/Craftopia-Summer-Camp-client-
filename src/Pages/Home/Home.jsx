import React from "react";
import Slider from "./Slider";
import PopularClass from "../../Components/PopularClass";
import PopularInstructor from "../../Components/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularClass />
      <PopularInstructor />
    </div>
  );
};

export default Home;
