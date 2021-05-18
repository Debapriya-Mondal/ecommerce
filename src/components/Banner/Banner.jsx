import React from "react";
import "./Banner.css";
const Banner = ({ name }) => {
  return (
    <div className="banner">
      <h1>{name}</h1>
    </div>
  );
};

export default Banner;
