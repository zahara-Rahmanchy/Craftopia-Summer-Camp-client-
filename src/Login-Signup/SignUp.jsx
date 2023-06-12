import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../Provider/AuthProvider";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {FaGoogle, FaUpload} from "react-icons/fa";
import Swal from "sweetalert2";

import axios from "axios";
export const SignUp = () => {
  const [error, setError] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();
  //   to check pass
  const password = watch("password");
  const {createUser, logOut, updateUserProfile, googleLogIn} =
    useContext(AuthContext);

  const navigate = useNavigate();
  const file = watch("image");
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        updateUserProfile(data.name, data.photo).then(() => {
          const newUser = {
            name: data.name,
            email: data.email,
            image: data.photo,
            role: "student",
          };
          axios
            .post("https://craftopia.vercel.app/users", newUser)
            // .post(" http://localhost:5000/users", newUser)

            .then(response => {
              if (response.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Registered successfully. Please Login!",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
            .catch(error => {
              setError(error.message);
            });
        });
        logOut()
          .then(() => {})
          .catch(error => setError(error.message));

        navigate("/login", {replace: true});
        // Use toast

        reset();
      })
      .catch(error => setError(error));
  };

  const handleGoogle = () => {
    googleLogIn()
      .then(result => {
        const loggedInUser = result.user;

        const newUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
          role: "student",
        };
        fetch("https://craftopia.vercel.app/users", {
          // fetch(" http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then(res => res.json())
          .then(data => {
            // console.log("inserted data", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registered successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        navigate("/");
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <>
      <Helmet>
        {" "}
        <title> Craftopia | Sign Up </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-1/2 ">
          <div className=" shadow-2xl bg-base-100 w-full">
            <h2 className="text-2xl mt-2 font-bold text-center text-green-500">
              Sign Up!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", {required: "Name is required"})}
                />
                {errors.name && (
                  <span className="text-red-600 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {required: "Email is required"})}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs m-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-zA-Z]).{6,12}$/,
                      message:
                        "Password should include at least one uppercase, one numeric value and one special character",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum Required length is 6",
                    },
                    maxLength: {
                      value: 12,
                      message: "Maximum Required length is 12",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-400 text-xs m-1">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  {...register("ConfirmPassword", {
                    required: "Confirm Password is Required",
                    validate: value =>
                      value === password ||
                      "The passwords do not match! Check properly",
                  })}
                />
                {errors.ConfirmPassword && (
                  <span className="text-red-400 text-xs m-1">
                    {errors.ConfirmPassword.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  {...register("photo", {
                    required: "Photo Url is Required",
                  })}
                />
                {errors.photo && (
                  <span className="text-red-400 text-xs m-1">
                    {errors.photo.message}
                  </span>
                )}
              </div>
              {/* <div className="flex items-start  form-control ">
                Photo Url
                {file && file.length > 0 && (
                  <p className="mt-2 text-blue-900 text-center">
                    {file[0].name}
                  </p>
                )}
                <label
                  htmlFor="upload"
                  className=" bg-green-400  py-2 px-4 rounded-md cursor-pointer flex flex-row items-center w-1/3 justify-center"
                >
                  <FaUpload className="me-1" />
                  Upload
                </label>
                <input id="upload" type="file" className="hidden" />
              </div> */}

              <div className="form-control">
                {" "}
                <p>
                  Already have an acount? Please{" "}
                  <Link to="/login" className="link text-blue-600">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-400" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
            <hr></hr>
            <button
              className="btn bg-green-200 w-3/4 mx-14 my-2"
              onClick={handleGoogle}
            >
              <FaGoogle /> Sign with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
