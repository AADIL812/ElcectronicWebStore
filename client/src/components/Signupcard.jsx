import React from "react";
import Signup from "./Signup";

const Signupcard = () => {
  return (
    <>
      <div className="card signupcard">
        <div className="card-body">
          <h5 className="card-title">SIGN UP</h5>
          <p className="card-text">
            Don't have an account. Then signup to Electronic hub and discover
            amazing deals.
          </p>
          <p>
            <Signup />
          </p>
        </div>
      </div>
    </>
  );
};

export default Signupcard;
