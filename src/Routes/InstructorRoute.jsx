import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../Provider/AuthProvider";
import {useContext} from "react";
import useInstructor from "../hooks/useInstructor";

const AdminRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading && isInstructorLoading) {
    return (
      <span className="loading loading-bars loading-lg text-center"></span>
    );
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;
