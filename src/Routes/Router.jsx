import {createBrowserRouter} from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Root from "../Layout/Root";
import Login from "../Login-Signup/Login";
import {SignUp} from "../Login-Signup/SignUp";
import Classes from "../Pages/Classes/Classes";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashBoard",
    element: (
      //   <PrivateRoute>
      <DashboardLayout />
    ),
    //   </PrivateRoute>
    children: [
      {
        // admin
        path: "dashboard/manageusers",
        element: <ManageUsers />,
      },
      {
        path: "ManageClasses",
        element: <ManageClasses />,
      },
    ],
  },
]);
