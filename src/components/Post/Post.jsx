import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "./SinglePost";

const Post = () => {
  const [inputTypeFlied, setInputTypeFlied] = useState("");
  const [phonesPostData, setPhonesPostData] = useState([]);

  useEffect(() => {
    fetch(
      `https://openapi.programming-hero.com/api/phones?search=${inputTypeFlied}`
    )
      .then((res) => res.json())
      .then((data) => setPhonesPostData(data.data));
  }, [inputTypeFlied]);

  return (
    <div>
      <div className="search_Area bg-lime-400">
        <div class="mb-4 p-8 w-[400px] mx-auto">
          <input
            onChange={(e) => setInputTypeFlied(e.target.value)}
            class="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search fravite food"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {phonesPostData.map((phone) => (
          <SinglePost phone={phone} key={phone.id}></SinglePost>
        ))}
      </div>
    </div>
  );
};

export default Post;
