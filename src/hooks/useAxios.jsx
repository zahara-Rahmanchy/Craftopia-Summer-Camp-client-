import {useContext, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // here creating the base url
});

const useAxios = () => {
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  /* ---------------------------------------------------------------------------------------------------------------
The interceptor takes a callback function with the config object as its parameter. 
The config object contains the request configuration, including the URL, headers, data, and more. 
-----------------------------------------------------------------------------------------------------------------*/

  useEffect(() => {
    axiosSecure.interceptors.request.use(config => {
      const token = localStorage.getItem("Access-token"); // here we are getting the token from local storage

      if (token) {
        config.headers.Authorization = `Bearer ${token}`; //if it exists then, It sets the  Authorization header to include the access token as a Bearer token
      }
      return config; //Finally, the interceptor returns the modified config object. This allows the request to continue with the updated configuration.
    });

    /*--------------------------------------------------------------------------------------------
    The axiosSecure.interceptors.response.use() function is used to set up a response interceptor. 
    // It takes two callback functions as parameters.  response  and async error functions
    ---------------------------------------------------------------------------------------------*/

    axiosSecure.interceptors.response.use(
      /** It is invoked when a response is successfully received from the server, without any errors. */
      response => response, // Return the original response object

      //    the second function is for handling errors (async error => { ... }).

      async error => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }

        /**---By returning a rejected promise, the interceptor signals that an error has occurred, allowing the subsequent promise
         * chain (such as the one returned by the Axios request) to handle the error appropriately ------------------------------*/
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxios;
