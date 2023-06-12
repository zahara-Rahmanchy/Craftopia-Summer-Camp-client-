import React from "react";
import useAxios from "../../../hooks/useAxios";
import {AuthContext} from "../../../Provider/AuthProvider";
import {useContext} from "react";
import {useQuery} from "@tanstack/react-query";
import {Helmet} from "react-helmet-async";

const PaymentHistory = () => {
  const [axiosSecure] = useAxios();
  const {user} = useContext(AuthContext);
  const {data: history = [], refetch} = useQuery(["history"], async () => {
    const res = await axiosSecure.get(`/payments/${user?.email}`);

    return res.data;
  });
  return (
    <>
      <Helmet>
        <title>Craftopia | Dashboard | Payment History</title>
      </Helmet>
      <div className="bg-green-200 h-full">
        <h2 className="text-center text-3xl py-9 text-teal-900 font-semibold italic">
          Payment History
        </h2>
        <div className="overflow-x-auto">
          <table className="table md:w-4/5 mx-auto">
            {/* head */}
            <thead>
              <tr className="md:text-xl text-lg bg-teal-500 text-green-50">
                <th></th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((clas, index) => (
                <tr
                  key={clas._id}
                  className="hover:bg-teal-500 hover:bg-opacity-30"
                >
                  <th>
                    {index + 1}{" "}
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={clas.image} alt="No image" />
                      </div>
                    </div>{" "}
                  </th>
                  <td>{clas.className}</td>
                  <td className="text-blue-700 font-semibold">${clas.price}</td>

                  <td>{clas.transactionId}</td>
                  <td>{clas.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
