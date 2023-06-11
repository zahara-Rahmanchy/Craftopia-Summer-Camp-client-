import React, {useContext} from "react";
import useAxios from "../../../../hooks/useAxios";
import {Helmet} from "react-helmet-async";
import {useQuery} from "@tanstack/react-query";
import {AuthContext} from "../../../../Provider/AuthProvider";

const MyClasses = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxios();

  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(`/class/instructor/${user.email}`);

    return res.data;
  });
  return (
    <>
      <Helmet>
        <title>Craftopia | Dashboard | My Classes</title>
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
                <th>Price</th>
                <th>
                  Available <br /> Seats
                </th>
                <th>
                  Enrolled <br /> Students
                </th>
                <th>Status</th>

                <th>FeedBack</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
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
                  <td>{clas.price}</td>
                  <td className="text-center">{clas.availableSeat}</td>
                  <td className="text-center">{clas.totalEnrolled}</td>
                  <td className="capitalize">{clas.status}</td>
                  {clas.feedback ? (
                    <td className=" capitalize">{clas.feedback}</td>
                  ) : (
                    <td>No Feedback</td>
                  )}
                  <td>
                    <button className="btn btn-ghost bg-orange-300  text-white me-3 hover:bg-orange-400 ">
                      Update
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

export default MyClasses;
