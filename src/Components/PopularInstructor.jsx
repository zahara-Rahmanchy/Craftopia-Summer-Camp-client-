import {useQuery} from "@tanstack/react-query";
import React from "react";
import useAxios from "../hooks/useAxios";
import {Roll, Rotate} from "react-awesome-reveal";

const PopularInstructor = () => {
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
      <h2 className="text-center text-5xl py-9 text-teal-600 font-semibold italic pt-5">
        <Rotate> Our Instructors</Rotate>
      </h2>
      <div className=" py-3 max-w-6xl mx-auto">
        <div
          className={` bg-green-200 grid md:grid-cols-3 grid-cols-1 gap-3 p-4 rounded-lg `}
        >
          {limitedInstructors.map((ins, index) => (
            <Roll cascade damping={0.1}>
              <figure key={ins._id} className="">
                <img src={ins.image} alt="Album" className="my-1 rounded-2xl" />
                <h2 className="text-orange-400 font-bold p-2 text-xl">
                  {" "}
                  {ins.name}
                </h2>
              </figure>
            </Roll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
