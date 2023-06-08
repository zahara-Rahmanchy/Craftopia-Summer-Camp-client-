import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };
  return (
    <div className="navbar  mt-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-0 p-2 shadow rounded-box w-52 text-md  bg-green-500 text-white z-50 bg-opacity-80"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-around space-y-0  items-center">
          {" "}
          <a className="btn btn-ghost font-bold md:text-3xl text-green-300 text-2xl">
            Craftopia
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar">
              <div className=" w-10 mask mask-squircle">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              className="ms-2 btn btn-xs bg-green-300"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
