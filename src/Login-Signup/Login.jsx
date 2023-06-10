import React, {useContext, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash, FaGoogle} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {useForm} from "react-hook-form";

import {AuthContext} from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();
  const {logIn, googleLogIn} = useContext(AuthContext);

  const [NoshowPass, setshowPass] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    console.log(data);
    logIn(data.email, data.password).then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire("Logged In Successfully!");
      navigate(from, {replace: true});
      //   navigate("/");
    });
  };

  // google login
  const handleGoogle = () => {
    googleLogIn()
      .then(result => {
        const loggedInUser = result.user;

        console.log(loggedInUser);
        const newUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
          type: "student",
        };
        fetch("http://localhost:5000/users", {
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
                title: "Logged successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        navigate(from, {replace: true});
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 p-4">
      <div className="hero-content flex-col lg:flex-row">
        {/* <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now to Exprience Fun!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div> */}
        <div className="card w-full max-w-lg shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={NoshowPass ? "password" : "text"}
                placeholder="password"
                className="input input-bordered"
                {...register("password", {required: "Password is required"})}
              />
              <button
                type="button"
                className="absolute left-52 top-44 flex items-center justify-center mb-2 px-2"
                onClick={() => setshowPass(!NoshowPass)}
              >
                {NoshowPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>{" "}
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Login</button>
            </div>
          </form>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <span className="mb-9 mx-3">
            <small>
              {" "}
              Don't have an acount? Please
              <Link to="/signup" className="link text-blue-600 ms-1">
                SignUp
              </Link>{" "}
            </small>
          </span>

          <hr></hr>
          <button
            className="btn bg-green-200 my-4 max-w-sm mx-3"
            onClick={handleGoogle}
          >
            <FcGoogle /> Log In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
