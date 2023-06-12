import React, {useContext} from "react";
import useAxios from "../../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import {AuthContext} from "../../Provider/AuthProvider";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const location = useLocation();

  const {data: classes = [], refetch} = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(`/classes`);

    return res.data;
  });
  // console.log("classes", classes);

  // handle seleected class
  const handleSelectedClass = clas => {
    if (!user?.email) {
      Swal.fire("Please login to select Class");
      navigate("/login");
    }
    const selectedClass = {
      classId: clas._id,
      className: clas.className,
      image: clas.image,
      instructorName: clas.instructorName,
      instructorEmail: clas.email,
      totalEnrolled: clas.totalEnrolled,
      availableSeat: clas.availableSeat,
      price: clas.price,
      isSelected: true,
      email: user.email,
    };
    console.log(selectedClass);
    axiosSecure.post("/selectedClass", selectedClass).then(data => {
      console.log("after posting new item", data.data);
      Swal.fire({
        title: "Your class has been added! Go to Dashboard to see.",
      });
    });
    console.log(clas);
  };

  return (
    <div className="bg-green-200 ">
      <Helmet>
        <title>Craftopia | Classes</title>
      </Helmet>
      <div className="mx-6 py-3">
        <h2 className="text-4xl font-semibold my-10 text-center text-teal-700 italic">
          {" "}
          Check our Amazing and Fun Classes!
        </h2>
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
                  className="ms-2 my-1 rounded-s-full w-full"
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
                    onClick={() => handleSelectedClass(clas)}
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
