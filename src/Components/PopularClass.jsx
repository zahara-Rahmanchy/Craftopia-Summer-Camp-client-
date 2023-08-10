import React, {useContext} from "react";
import useAxios from "../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
import {Bounce, Fade, Rotate, Slide} from "react-awesome-reveal";
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
    <div className={` my-28 max-w-7xl rounded-md mx-auto`}>
      <h2
        className="text-5xl font-semibold mb-2 text-center   mt-28 text-teal-700"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontVariationSettings: "'opsz' 14, 'wght' 400",
        }}
      >
        Favourite Courses
      </h2>
      <hr class="border-t-4 border-orange-300 w-1/6 mx-auto" />
      <h3 className="text-center text-slate-700 text-3xl mt-2 mb-10">
        Take a glance!
      </h3>
      <div
        className=" w-full
        h-full object-cover rounded-md  "
        style={{
          background: `linear-gradient(90deg, rgba(27,30,46,1) 0%, rgba(116,53,13,0.9557072829131653) 100%);`,
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className={` grid md:grid-cols-3 grid-cols-1 gap-3 p-4 rounded-lg`}
        >
          {classes.map((clas, index) => (
            <Slide direction="down">
              <div>
                {" "}
                <figure
                  key={clas._id}
                  className="card shadow-lg p-4 m-4 border-b-8 border-r-4 border--900  bg-slate-950"
                >
                  <img
                    src={clas.image}
                    alt="Album"
                    className="my-1 rounded-s-full shadow-md shadow-teal-900 p-5"
                  />
                  <h2 className="text-orange-300 font-bold p-5 text-center text-xl">
                    {" "}
                    {clas.className}
                  </h2>
                </figure>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
