import {useQuery} from "@tanstack/react-query";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import {Helmet} from "react-helmet-async";

const Instructors = () => {
  const [axiosSecure] = useAxios();
  const {data: instructors = [], refetch} = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get(`/instructors`);

      return res.data;
    }
  );
  return (
    <div className="bg-green-200 ">
      <Helmet>
        <title>Craftopia | Instructors</title>
      </Helmet>
      <div className="mx-6 py-3">
        <h2 className="text-4xl font-semibold my-10 text-center text-teal-700 italic">
          {" "}
          Meet Our Amazing Instructors!
        </h2>
        <div
          className={`grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 m-3 `}
        >
          {instructors.map((ins, index) => (
            <div
              className={`card  lg:card-normal shadow-xl p-2 bg-orange-100 `}
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
                  {ins.email}
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
