import React from "react";
import useAxios from "../../../../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
const ManageUsers = () => {
  const [axiosSecure] = useAxios();

  const {data: users = [], refetch} = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");

    return res.data;
  });

  console.log("data from tanstack", users.image);
  const {image} = users;
  console.log(image);
  return (
    <div className="bg-teal-100 h-full">
      <h2 className="text-center text-3xl py-9 text-teal-900 font-semibold">
        All Users Information
      </h2>
      <div className="overflow-x-auto">
        <table className="table md:w-4/5 mx-auto">
          {/* head */}
          <thead>
            <tr className="md:text-xl text-lg bg-teal-500 text-green-50">
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Assign Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-teal-500 hover:bg-opacity-30"
              >
                <th>
                  {index + 1}{" "}
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>{" "}
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>
                <td>
                  <button className="btn btn-ghost bg-orange-300  text-white me-3">
                    Admin
                  </button>
                  <button className="btn btn-ghost bg-teal-400  text-white md:me-2 mt-2">
                    Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
