import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="px-5 my-0 py-0 bg-lime-100">
      <Navbar></Navbar>
      <div>
        {navigation.state === "loading" && (
          <img
            src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
            alt=""
          />
        )}
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Home;
