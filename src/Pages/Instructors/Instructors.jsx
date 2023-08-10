import {useQuery} from "@tanstack/react-query";
import React, {useContext} from "react";
import useAxios from "../../Hooks/useAxios";
import {Helmet} from "react-helmet-async";
import {ThemeContext} from "../../Provider/ThemeProvider";

const Instructors = () => {
  const {theme} = useContext(ThemeContext);
  const textColorClass =
    theme === "light"
      ? "bg-green-200 text-teal-700 "
      : "text-green-300  bg-teal-800";
  const [axiosSecure] = useAxios();
  const {data: instructors = [], refetch} = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get(`/instructors`);

      return res.data;
    }
  );
  return (
    <div className={`bg-slate-700 pt-20`}>
      <Helmet>
        <title>Craftopia | Instructors</title>
      </Helmet>
      <div className={`mx-6 py-3 `}>
        <h2
          className={`text-4xl font-semibold my-10 text-center italic text-teal-400`}
        >
          {" "}
          Meet Our Amazing Instructors!
        </h2>
        <div
          className={`grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 m-3 `}
        >
          {instructors.map((ins, index) => (
            <div
              className={`card  lg:card-normal shadow-xl p-2 bg-orange-100 m-4`}
              key={ins._id}
            >
              <figure>
                <img
                  src={ins.image}
                  alt="Album"
                  className="ms-2 my-1 rounded-s-full "
                />
              </figure>

              <div className="card-body ">
                <h2 className="card-title text-teal-700">{ins.name}</h2>
                <p className="font-bold">
                  <span className="mt-1 text-lg  text-green-500 font-semibold me-2">
                    Email:
                  </span>
                  <span className="text-teal-700"> {ins.email}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
