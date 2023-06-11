import React from "react";
import useAxios from "../../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";

const Classes = () => {
  const [axiosSecure] = useAxios();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(`/classes`);

    return res.data;
  });
  console.log("classes", classes);
  return (
    <div className="bg-green-200 ">
      <Helmet>
        <title>Craftopia | Classes</title>
      </Helmet>
      <div className="mx-6 py-3">
        <div
          className={`grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 m-3 `}
        >
          {classes.map((clas, index) => (
            <div
              className={`card  lg:card-side shadow-xl p-2 ${
                clas.availableSeat === 0 ? "bg-red-400" : "bg-orange-100 "
              }`}
              key={clas._id}
            >
              <figure>
                <img
                  src={clas.image}
                  alt="Album"
                  className="ms-2 my-1 rounded-lg"
                />
              </figure>

              <div className="card-body ">
                <h2 className="card-title text-teal-700">{clas.className}</h2>
                <h2 className="mt-1 text-lg  text-orange-400 font-semibold">
                  Instructor
                </h2>
                <p className="font-bold">{clas.instructorName}</p>
                <p className="font-semibold">
                  Available Seats :{" "}
                  <span className=" text-lg text-green-600">
                    {clas.availableSeat}
                  </span>
                </p>
                <p>
                  Price :{" "}
                  <span className=" text-lg text-blue-800 font-semibold">
                    ${clas.price}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn hover:bg-orange-400  bg-teal-600 text-white border-0"
                    disabled={
                      isAdmin || isInstructor || clas.availableSeat === 0
                    }
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
