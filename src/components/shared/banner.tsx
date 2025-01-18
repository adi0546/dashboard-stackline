import React from "react";
import stackline_logo from "./../../assets/stackline_logo.svg";

function Banner() {
  return (
    <div className="banner">
        <img src={stackline_logo} className="stackline_logo" alt="Stackline Logo" />
    </div>
  );
}
export default Banner;