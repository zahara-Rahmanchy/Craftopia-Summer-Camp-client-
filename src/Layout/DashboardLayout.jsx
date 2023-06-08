import React from "react";
import {Link, Outlet} from "react-router-dom";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {FaUsers} from "react-icons/fa";
import {GiOpenBook} from "react-icons/gi";
const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content grid gap-10 grid-cols-4  justify-center">
        {/* Page content here */}
        <div className="col-span-4 order-2 w-full ">
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
          <li>
            <Link
              to="dashboard/manageusers"
              className="text-2xl font-semibold text-white my-5"
            >
              <FaUsers className="text-3xl text-orange-200" />
              Manage Users
            </Link>
          </li>
          <li>
            <Link
              to="dashboard/manageclasses"
              className="text-2xl font-semibold text-white my-5"
            >
              <GiOpenBook className="text-3xl text-orange-200" />
              Manage Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
