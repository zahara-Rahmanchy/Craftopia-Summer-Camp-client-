import React, {useContext} from "react";
import useAxios from "../../hooks/useAxios";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import {AuthContext} from "../../Provider/AuthProvider";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {ThemeContext} from "../../Provider/ThemeProvider";
import ClassesBanner from "./ClassesBanner.jsx";

const Classes = () => {
  const {theme} = useContext(ThemeContext);
  const textColorClass =
    theme === "light"
      ? "bg-green-50 text-teal-700 "
      : "text-green-300  bg-teal-800";
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

    axiosSecure.post("/selectedClass", selectedClass).then(data => {
      Swal.fire({
        title: "Your class has been added! Go to Dashboard to see.",
      });
    });
  };

  return (
    <div className={textColorClass}>
      <Helmet>
        <title>Craftopia | Classes</title>
      </Helmet>
      <div className={`mx-6 py-3 `}>
        <ClassesBanner />
        <h2
          className={`text-4xl font-semibold text-center my-20  italic ${textColorClass}`}
        >
          {" "}
          Explore our Amazing and Fun Classes!
        </h2>
        <div
          className={`grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 mb-40 place-items-center`}
        >
          {classes.map((clas, index) => (
            <div
              className={`card w-4/5 lg:card shadow-2xl p-2 border-r-4 border-b-8 border-b-teal-600 border-r-teal-600 ${
                clas.availableSeat === 0 ? "bg-red-400" : "bg-orange-50 "
              }`}
              key={clas._id}
            >
              <figure>
                <img
                  src={clas.image}
                  alt="Album"
                  className="mx-5 my-1 rounded-s-full w-full p-3"
                />
              </figure>

              <div className="card-body ">
                <h2 className="card-title text-teal-700">{clas.className}</h2>
                <p className="mt-1 text-xl  text-orange-400 font-semibold">
                  Instructor :
                  <span className="font-bold text-lg text-teal-700 ms-2">
                    {clas.instructorName}
                  </span>
                </p>
                <p className="font-semibold text-teal-700">
                  Available Seats :{" "}
                  <span className=" text-lg text-green-600">
                    {clas.availableSeat}
                  </span>
                </p>
                <p className="font-semibold text-teal-700">
                  Price :{" "}
                  <span className=" text-lg text-blue-800 font-semibold">
                    ${clas.price}
                  </span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn hover:bg-orange-400  bg-teal-800 text-white border-0"
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
