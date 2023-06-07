import React, {useContext, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {useForm} from "react-hook-form";
// import Swal from "sweetalert2";
import {AuthContext} from "../Provider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors},
  } = useForm();
  const {logIn} = useContext(AuthContext);

  const [NoshowPass, setshowPass] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    console.log(data);
    logIn(data.email, data.password).then(result => {
      const user = result.user;
      console.log(user);
      //   Swal.fire({
      //     title: "User Login Successful.",
      //     showClass: {
      //       popup: "animate__animated animate__fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutUp",
      //     },
      //   });
      navigate(from, {replace: true});
      //   navigate("/");
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
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {required: "Email is required"})}
              />
            </div>
            <div className="form-control">
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
                className="absolute inset-y-0 right-9 flex items-center justify-center mb-2 px-2"
                onClick={() => setshowPass(!NoshowPass)}
              >
                {NoshowPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>{" "}
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Login</button>
            </div>
          </form>
          <span className="mb-9 mx-3">
            <small>
              {" "}
              Don't have an acount? Please
              <Link to="/signup" className="link text-blue-600 ms-1">
                Sign Up
              </Link>{" "}
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
