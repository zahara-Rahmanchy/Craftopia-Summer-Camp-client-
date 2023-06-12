import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {FaHome, FaUsers} from "react-icons/fa";
import {GiOpenBook} from "react-icons/gi";
import {BsPlusCircleFill} from "react-icons/bs";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid gap-10 md:grid-cols-4  justify-center">
        {/* Page content here */}
        <div className="col-span-4 order-2 w-full bg-green-200">
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn bg-transparent border-0 text-teal-600 text-5xl mt-2 hover:text-blue-950 hover:bg-transparent drawer-button lg:hidden  col-span-1 place-self-start order-1"
        >
          {" "}
          <AiOutlineMenuUnfold />{" "}
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full   bg-gradient-to-b from-teal-500 via-green-300 to-green-300 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/manageusers"
                  className="text-2xl font-semibold text-white my-5"
                >
                  <FaUsers className="text-3xl text-orange-200" />
                  Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageclasses"
                  className="text-2xl font-semibold text-white my-5"
                >
                  <GiOpenBook className="text-3xl text-orange-200" />
                  Manage Classes
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/addclass"
                  className="text-2xl font-semibold text-white my-5"
                >
                  <BsPlusCircleFill className="text-3xl text-orange-200" />
                  Add Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myclasses"
                  className="text-2xl font-semibold text-white my-5"
                >
                  <GiOpenBook className="text-3xl text-orange-200" />
                  My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/selectedclasses"
                  className="text-2xl font-semibold text-white my-5"
                >
                  <GiOpenBook className="text-3xl text-orange-200" />
                  Selected Classes
                </NavLink>
              </li>
              <li>Enrolled Classes</li>
              <li>Payment History</li>
            </>
          )}
          <hr />
          <li>
            <NavLink to="/" className="text-2xl font-semibold text-white my-5">
              <FaHome className="text-3xl text-orange-200" />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
