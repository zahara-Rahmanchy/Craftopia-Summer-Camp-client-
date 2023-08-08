import React, {useContext} from "react";
import useAxios from "../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
import {Bounce, Fade, Rotate} from "react-awesome-reveal";
import {useState} from "react";
import {ThemeContext} from "../Provider/ThemeProvider";

const PopularClass = () => {
  const {theme} = useContext(ThemeContext);
  // const textColorClass =
  //   theme === "light"
  //     ? "text-teal-600 bg-green-50"
  //     : "text-green-300  bg-teal-950";
  const [axiosSecure] = useAxios();

  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(`/classessorted`);

    return res.data;
  });

  return (
    <div className={` p-10 mt-5`}>
      <h2
        className={` text-left  mx-auto text-5xl py-9 pl-5 mb-5 border-l-orange-300 rounded-md  font-semibold italic pt-8 border-l-8 w-4/5
    `}
      >
        <Bounce>Our Popular Classes </Bounce>
      </h2>
      <div className="py-3 max-w-6xl mx-auto bg-green-50">
        <div
          className={` grid md:grid-cols-3 grid-cols-1 gap-3 p-4 rounded-lg `}
        >
          {classes.map((clas, index) => (
            // <Rotate cascade damping={0.1}>

            <div className="card  p-10 text-center ">
              <h2 className="card-title text-orange-400 text-center">
                {clas.className}
              </h2>
              <figure key={clas._id} className="shadow-2xl p-4 bg-[#EEFBF3]">
                <img
                  src={clas.image}
                  alt="Album"
                  className="my-1 rounded-full "
                />
              </figure>
            </div>
            // </Rotate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
