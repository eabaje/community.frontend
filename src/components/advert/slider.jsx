import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

const AdvertSlider = () => {
  const location = useLocation();

  //destructuring pathname from location
  // const { pathname } = location;

  // //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");

  const a = 1;
  useEffect(() => {
    //let controller = new AbortController();
  }, [a]);

  return (
    <>
      <div class="page-banner-box bg-10">
        <h3>Advert</h3>
      </div>
    </>
  );
};

export default AdvertSlider;
