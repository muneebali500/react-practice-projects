import React from "react";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">start now</button>
        </div>
        <div className="hero-images">
          <img src={phoneImg} alt="Phone Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
