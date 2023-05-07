import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, id, email, website, phone } = userDetails;

  return (
    <div className="md:flex justify-between border p-5  text-white bg-violet-600 font-bold">
      <div>
        <img
          src="https://media2.giphy.com/media/3dpG9uWjIOgQwIcLN3/200w.gif?cid=82a1493bpg3lynmzf50gfmnoaf1tr92feiij4o7b3w99i33a&ep=v1_gifs_related&rid=200w.gif&ct=g"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS5qR0fia4X3U1nLx7-prbFfv8gUzgPIGAw&usqp=CAU"
          alt=""
        />
      </div>
      <div>
        <p className="font-bold text-2xl text-lime-500">{name}</p>
        <p className="font-bold text-2xl text-lime-500">email: {email}</p>
        <p className="font-bold text-2xl text-lime-500">website: {website}</p>
        <p className="font-bold text-2xl text-lime-500">phone: {phone}</p>
        <p className="font-bold text-2xl text-lime-500"></p>
      </div>
    </div>
  );
};

export default UserDetails;
