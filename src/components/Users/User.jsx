import React from "react";
import { Link } from "react-router-dom";

const User = ({ userData }) => {
  const { name, id, email, website, phone } = userData;

  return (
    <div className="bg-green-500 p-3">
      <img
        src="https://www.doncaprio.com/wp-content/uploads/2012/07/animated_twitter_.gif"
        alt=""
      />
      <p>{name}</p>
      <p>email: {email}</p>
      <p>website: {website}</p>
      <p>phone: {phone}</p>
      <br />
      <p>
        <Link to={`/user/${id}`} className="bg-black rounded py-1  text-white px-4 ">
          add more Details
        </Link>
      </p>
    </div>
  );
};

export default User;
