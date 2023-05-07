import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((userData) => (
          <User key={userData.id} userData={userData}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
