import {useQuery} from "@tanstack/react-query";
import React from "react";
import {Helmet} from "react-helmet-async";
import {FaTrash} from "react-icons/fa";
import useAxios from "../../../../hooks/useAxios";

const SelectedClasses = () => {
  const [axiosSecure] = useAxios();
  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/selectedClass");

    return res.data;
  });
  return (
    <>
      <Helmet>
        <title>Craftopia | Dashboard | Selected Classes</title>
      </Helmet>
      <div className="bg-green-200 h-full">
        <h2 className="text-center text-3xl py-9 text-teal-900 font-semibold">
          My Selected Classes
        </h2>
        <div className="overflow-x-auto">
          <table className="table md:w-4/5 mx-auto">
            {/* head */}
            <thead>
              <tr className="md:text-xl text-lg bg-teal-700 text-green-50">
                <th></th>
                <th>Class Name</th>
                <th>Instructor</th>

                <th>Price</th>

                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {classes.map((clas, index) => (
                <tr
                  key={clas._id}
                  className="hover:bg-teal-500 hover:bg-opacity-30"
                >
                  <th>
                    {index + 1}{" "}
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={clas.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>{" "}
                  </th>
                  <td>{clas.className}</td>
                  <td>{clas.instructorName}</td>

                  <td>{clas.price}</td>

                  <td className="flex flex-row text-center justify-center">
                    <button className="btn btn-ghost bg-teal-400   text-white me-3 hover:bg-teal-600 mt-2 ">
                      Pay
                    </button>
                    <button
                      className="btn btn-ghost   text-white me-3 mt-2"
                      onClick={() => handleDeny(clas)}
                      disabled={clas?.clicked === true}
                    >
                      <FaTrash className="text-orange-300 bg-transparent  hover:text-red-500 text-3xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* )} */}
    </>
  );
};

export default SelectedClasses;
