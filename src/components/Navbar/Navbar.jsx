import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const navbarItem = [
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Users",
      path: "/users",
    },
    {
      name: "Phones",
      path: "/phones",
    },
    {
      name: "Meals",
      path: "/meals",
    },
  ];
  return (
    <div className=" sticky top-0 bg-lime-400 font-bold py-5 flex  flex-col md:flex-row ">
      {navbarItem.reverse().map((route) => (
        <NavItem route={route}></NavItem>
      ))}
    </div>
  );
};

export default Navbar;
