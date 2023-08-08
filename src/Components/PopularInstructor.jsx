import {useQuery} from "@tanstack/react-query";
import React, {useContext} from "react";
import useAxios from "../hooks/useAxios";
import {Roll, Rotate} from "react-awesome-reveal";
import {ThemeContext} from "../Provider/ThemeProvider";

const PopularInstructor = () => {
  const {theme} = useContext(ThemeContext);
  const textColorClass =
    theme === "light" ? "text-teal-600 " : "text-green-300  bg-teal-950";
  const [axiosSecure] = useAxios();

  const {data: instructors = [], refetch} = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get(`/instructors`);

      return res.data;
    }
  );
  const limitedInstructors = instructors.slice(0, 6);
  return (
    <div className="p-5 ">
      <h2
        className={`text-center text-5xl py-9 font-semibold italic pt-5 ${textColorClass}`}
      >
        Our Instructors
        {/* <Rotate> Our Instructors</Rotate> */}
      </h2>
      <div className=" py-3 max-w-6xl mx-auto">
        <div
          className={`grid md:grid-cols-3 grid-cols-1 gap-3 p-4 rounded-lg `}
        >
          {limitedInstructors.map((ins, index) => (
            // <Roll cascade damping={0.1}>
            <figure
              key={ins._id}
              className="card shadow-lg p-4 m-4 border-b-8 border-r-4 border-teal-600 bg-blue-50"
            >
              <img
                src={ins.image}
                alt="Album"
                className="my-1 rounded-2xl border-4 border-stone-300"
              />
              <h2 className="text-orange-400 font-bold p-2 text-xl">
                {" "}
                {ins.name}
              </h2>
            </figure>
            // </Roll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
