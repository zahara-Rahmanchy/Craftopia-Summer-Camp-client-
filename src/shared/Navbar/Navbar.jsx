import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
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
            className="menu menu-sm dropdown-content mt-0 p-2 shadow rounded-box w-52"
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
          <a className="btn btn-ghost font-bold text-2xl text-teal-400">
            Craftopia
          </a>
          <span className=" italic text-sm text-orange-300 my-0">
            Summer Camp
          </span>
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
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
