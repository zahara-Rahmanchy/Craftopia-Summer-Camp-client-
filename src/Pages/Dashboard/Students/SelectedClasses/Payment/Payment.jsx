import {Elements} from "@stripe/react-stripe-js";
import React from "react";
import {useLocation, useParams} from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import {loadStripe} from "@stripe/stripe-js";
import {Helmet} from "react-helmet-async";

const Payment = () => {
  const location = useLocation();
  const price = location.state?.price;
  const clas = location.state?.clas;

  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

  return (
    <>
      {" "}
      <Helmet>
        <title>Craftopia | Dashboard | Payment</title>
      </Helmet>
      <div className="h-full bg-green-200 w-full">
        <h2 className="text-center text-3xl pt-5 pb-3 text-teal-900 font-semibold uppercase italic ">
          Payment
        </h2>
        <div className="hero ">
          <div className="hero-content md:w-full">
            <div className=" shadow-2xl bg-orange-50 w-full h-60">
              <Elements stripe={stripePromise}>
                <CheckoutForm price={parseFloat(price)} clas={clas} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
