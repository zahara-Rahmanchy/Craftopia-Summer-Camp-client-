import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
const Login = () => {
  const [NoshowPass, setshowPass] = useState(true);
  return (
    <div className="hero min-h-screen bg-base-200">
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
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
              />
              <button
                type="button"
                className="absolute inset-y-0 right-9 flex items-center justify-center p-2 mt-3"
                onClick={() => setshowPass(!NoshowPass)}
              >
                {NoshowPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="form-control">
              {" "}
              <p>
                Don't have an acount? Please{" "}
                <Link to="/signup" className="link text-blue-600">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-400">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
