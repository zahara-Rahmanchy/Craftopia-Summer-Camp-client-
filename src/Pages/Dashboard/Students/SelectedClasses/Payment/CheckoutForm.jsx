import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import React from "react";
import {useState} from "react";
import useAxios from "../../../../../hooks/useAxios";
import {useContext} from "react";
import {AuthContext} from "../../../../../Provider/AuthProvider";
import {useEffect} from "react";

const CheckoutForm = ({price, clas}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxios();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const {user} = useContext(AuthContext);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", {price}).then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("card", card);
    // Use your card Element with other Stripe.js APIs
    const {error} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);
    const {paymentIntent, error: confirmError} =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unKnown",
            email: user?.email || "unKnown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

    setProcessing(false);
    // if successful then payment complete
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && (
        <p className="text-red-400 text-semibold text-sm mt-3 mx-auto">
          {cardError}
        </p>
      )}
      <button
        className="btn bg-red-400 hover:bg-teal-800 text-white text-lg  w-1/2 mx-auto flex justify-center mt-20"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
