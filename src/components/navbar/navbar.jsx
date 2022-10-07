import React, { useState, useEffect, useContext } from "react";

//import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

import { GlobalContext } from "../../context/Provider";

import Menu from "./vertical/navbar-vertical-menu";

import { IMG_URL } from "../../constants";
import { ROLES } from "../../constants/enum";

const NavBar = ({ path, title, cssStyle }) => {
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
      <Link to={path} title={title} className="nav-link1 ">
        <span className={cssStyle}>{title}</span>
      </Link>{" "}
    </>
  );
};

export default NavBar;
