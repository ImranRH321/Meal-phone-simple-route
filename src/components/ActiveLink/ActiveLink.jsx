import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
   
     <NavLink
      to={to}
      className={({ isActive}) =>
        isActive ? "active text-red-400 mx-12 font-bold font-serif" : " mx-12 "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
