import React from "react";
import { Link } from "react-router-dom";

const PaymentBlank = () => {
  return (
    <div style={{ padding: "50px 20px" }}>
      <h3>Go to My Order Page and Select Product For Pay, Thank You</h3>
      <Link to="/dashboard/myOrder" style={{ textDecoration: "none" }}>
        <button className="button-29">Go To My Order Page</button>
      </Link>
    </div>
  );
};

export default PaymentBlank;
