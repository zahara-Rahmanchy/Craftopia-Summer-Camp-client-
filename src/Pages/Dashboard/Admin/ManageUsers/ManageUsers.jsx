import React, {useState} from "react";
import useAxios from "../../../../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
import Swal from "sweetalert2";
const ManageUsers = () => {
  const [axiosSecure] = useAxios();
  const [isAdmindisable, setAdminDisable] = useState(false);
  const [userId, setUserId] = useState();

  const {data: users = [], refetch} = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");

    return res.data;
  });
  const handleAdmin = user => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({role: "admin", clicked: true}),
    })
      .then(res => res.json())
      .then(data => {
        console.log("modified", data);
        if (data.modifiedCount) {
          refetch(user._id);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // instructor
  const handleInstructor = user => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({role: "instructor", clicked: true}),
    })
      .then(res => res.json())
      .then(data => {
        console.log("modified", data);
        if (data.modifiedCount) {
          refetch(user._id);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
                  <button
                    className="btn btn-ghost bg-orange-300  text-white me-3 hover:bg-orange-400 "
                    onClick={() => handleAdmin(user)}
                    disabled={user?.clicked === true ? true : false}
                  >
                    Admin
                  </button>
                  <button
                    className="btn btn-ghost bg-teal-400  text-white md:me-2 mt-2 hover:bg-teal-600"
                    // disabled={isAdmindisable}
                    onClick={() => handleInstructor(user)}
                    disabled={user?.clicked === true ? true : false}
                  >
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
