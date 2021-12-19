import * as React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="box">
      <div class="box-text">
        <h2>Capture Your Moment with</h2>
        <h1>LOGIC CAMERA STORE</h1>
        <Link
          style={{
            textDecoration: "none",
            padding: "5px 25px",
            border: "1px solid aquamarine",
            color: "white",
            borderRadius: "5px",
            fontSize: "1.2rem",
          }}
          to="/exploreCamera"
        >
          Explore Camera
        </Link>
      </div>
    </div>
  );
};

export default Banner;
