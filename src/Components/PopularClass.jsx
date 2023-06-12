import React from "react";
import useAxios from "../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";

const PopularClass = () => {
  const [axiosSecure] = useAxios();

  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(`/classessorted`);

    return res.data;
  });
  return (
    <div className="bg-green-200 p-8 ">
      <h2 className="text-center text-5xl py-9 text-teal-900 font-semibold italic pt-8">
        Our Porpular Classes
      </h2>
      <div className=" py-3 max-w-6xl mx-auto">
        <div
          className={` bg-orange-100 grid md:grid-cols-3 grid-cols-1 gap-3 p-4 rounded-lg `}
        >
          {classes.map((clas, index) => (
            <figure key={clas._id} className="">
              <img
                src={clas.image}
                alt="Album"
                className="my-1 rounded-full  h-"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
