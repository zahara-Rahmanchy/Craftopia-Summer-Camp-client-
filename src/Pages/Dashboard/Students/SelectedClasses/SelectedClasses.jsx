import {useQuery} from "@tanstack/react-query";
import React from "react";
import {Helmet} from "react-helmet-async";
import {FaTrash} from "react-icons/fa";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

const SelectedClasses = () => {
  const [axiosSecure] = useAxios();
  let data = {};
  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/selectedClass");

    return res.data;
  });

  const handleDelete = clas => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(15 118 110)",
      cancelButtonColor: "rgb(248 113 113)",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selectedClass/${clas._id}`).then(response => {
          const {data} = response;
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Craftopia | Dashboard | Selected Classes</title>
      </Helmet>
      <div className="bg-green-200 h-full ">
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
                <th className="text-center">
                  Available <br /> Seats
                </th>
                <th className="text-center">
                  Total <br /> Enrolled{" "}
                </th>
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

                  <td className="text-blue-700 font-semibold">
                    $ {clas.price}
                  </td>
                  <td className="text-center">{clas.availableSeat}</td>
                  <td className="text-center">{clas.totalEnrolled}</td>

                  <td className="flex flex-row text-center justify-center">
                    <Link
                      // to={`/dashboard/payment/${clas.classId}`}
                      to="/dashboard/payment"
                      state={
                        (data = {
                          price: clas.price,
                          clas: clas,
                        })
                      }
                      className="btn btn-ghost bg-teal-400   text-white me-3 hover:bg-teal-600 mt-2 "
                    >
                      Pay
                    </Link>
                    <button
                      className="btn btn-ghost   text-white me-3 mt-2"
                      onClick={() => handleDelete(clas)}
                      // disabled={clas?.clicked === true}
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
