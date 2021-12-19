import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import CheckOutForm from "./CheckOutForm";
import "./Payment.css";

const stripePromise = loadStripe(
  "pk_test_51K7tjjAU2RAnDxRjCdSaJzuB6ku0c9dVaNR7LuEXvMwBDghjVoH0QjMl3mg8HCviaT8WHaJOzlgQZ3yKcXzpojot00uuZhtG0c"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [order, setOrder] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://murmuring-depths-55393.herokuapp.com/order/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [paymentId]);
  return (
    <div className="payment-card">
      <h2>Please Pay For: {order.productsName}</h2>
      <h4>Amount: ${order.price}</h4>
      <p>Customer Name: {user.displayName}</p>
      <p>Customer Email: {user.email}</p>
      {order?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutForm order={order} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
