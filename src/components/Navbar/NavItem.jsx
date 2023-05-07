import React from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const NavItem = ({ route }) => {
  return (
    /* 
    <Link className="mr-12" to={route.path}>
      {route.name}
    </Link>
     */

      <ActiveLink to={route.path}>{route.name}</ActiveLink>

  );
};

export default NavItem;
