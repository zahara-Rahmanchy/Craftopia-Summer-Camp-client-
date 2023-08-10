import {useQuery} from "@tanstack/react-query";
import React, {useContext, useEffect} from "react";
import useAxios from "../hooks/useAxios";
import {Fade, Roll, Rotate, Slide} from "react-awesome-reveal";
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
    <div className=" ">
      <h2
        className="text-5xl font-semibold mb-2 text-center mt-20 text-teal-700"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontVariationSettings: "'opsz' 14, 'wght' 400",
        }}
      >
        Most Loved Instuctors!
      </h2>
      <hr class="border-t-4 border-orange-300 w-1/4 mx-auto" />
      <h3 className="text-center text-slate-700 text-3xl my-2"></h3>
      <div className=" py-3 max-w-6xl mx-auto">
        <div
          className={`grid md:grid-cols-3 grid-cols-1 gap-3 p-4 rounded-lg `}
        >
          {limitedInstructors.map((ins, index) => (
            <Slide direction="down" duration={1000}>
              <figure
                key={ins._id}
                className="card shadow-lg p-4 m-4 border-b-8 border-r-4 border-teal-600 bg-slate-900"
              >
                <img
                  src={ins.image}
                  alt="Album"
                  className="my-1 rounded-2xl border-4 border-stone-300"
                />
                <h2 className="text-orange-300 font-bold p-2 text-xl">
                  {" "}
                  {ins.name}
                </h2>
              </figure>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
