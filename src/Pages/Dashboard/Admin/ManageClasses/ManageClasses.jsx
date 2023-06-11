import {useQuery} from "@tanstack/react-query";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxios();

  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class");

    return res.data;
  });

  const handleApprove = clas => {
    axiosSecure
      .patch(`/class/${clas._id}`, {status: "approved", clicked: true})
      .then(response => {
        console.log("modified", response.data);
        if (response.data.modifiedCount) {
          refetch(["classes"]);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${clas.className} is Approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = clas => {
    axiosSecure
      .patch(`/class/${clas._id}`, {status: "denied", clicked: true})
      .then(response => {
        console.log("modified", response.data);
        if (response.data.modifiedCount) {
          refetch(["classes"]);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${clas.className} is Denied!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Craftopia | Dashboard | Manage Classes</title>
      </Helmet>
      <div className="bg-teal-100 h-full">
        <h2 className="text-center text-3xl py-9 text-teal-900 font-semibold">
          My Classes
        </h2>
        <div className="overflow-x-auto">
          <table className="table md:w-4/5 mx-auto">
            {/* head */}
            <thead>
              <tr className="md:text-xl text-lg bg-teal-500 text-green-50">
                <th></th>
                <th>Class Name</th>
                <th className="text-center">
                  Instructor <br /> Name
                </th>
                <th className="text-center">
                  Instructor <br /> Email
                </th>
                <th>Price</th>
                <th className="text-center">
                  Available <br /> Seats
                </th>

                <th>Status</th>

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
                  <td>{clas.email}</td>
                  <td>{clas.price}</td>
                  <td className="text-center">{clas.availableSeat}</td>

                  <td
                    className={`capitalize font-semibold ${
                      clas.status === "pending"
                        ? "text-orange-300"
                        : clas.status === "approved"
                        ? "text-green-500"
                        : "text-red-300"
                    }`}
                  >
                    {clas.status}
                  </td>

                  <td className="flex md:flex-row flex-col">
                    <button
                      className="btn btn-ghost bg-teal-400   text-white me-3 hover:bg-teal-600 mt-2 "
                      onClick={() => handleApprove(clas)}
                      disabled={clas?.clicked === true}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-ghost bg-red-300  text-white me-3 hover:bg-red-400 mt-2"
                      onClick={() => handleDeny(clas)}
                      disabled={clas?.clicked === true}
                    >
                      Deny
                    </button>
                    <button className="btn btn-ghost bg-orange-300  text-white me-3 hover:bg-orange-400 mt-2">
                      Send Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
