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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import SelectedClasses from "../Pages/Dashboard/Students/SelectedClasses/SelectedClasses";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses/MyClasses";
import Payment from "../Pages/Dashboard/Students/SelectedClasses/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Students/PaymentHistory";
import EnrolledClasses from "../Pages/Dashboard/Students/EnrolledClasses";
import ErrorPage from "../shared/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        // admin
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      // instructors
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },

      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses />{" "}
          </InstructorRoute>
        ),
      },
      // students
      {
        path: "selectedclasses",
        element: (
          <PrivateRoute>
            <SelectedClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledclass",
        element: (
          <PrivateRoute>
            <EnrolledClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
