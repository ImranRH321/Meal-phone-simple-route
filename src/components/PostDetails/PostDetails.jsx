import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { data } = useLoaderData();

  const { name, image, phone_name, slug, brand, releaseDate, mainFeatures } =
    data;

  const navigate = useNavigate();
  const handlerGoToBreak = () => {
    navigate(-1);
  };

  const orderFromLink = () => {
    navigate(`/contact`);
  };

  return (
    <div className="  text-center border">
      <div>
        <div className="bg-lime-100  hover:bg-orange-400 duration-500 p-2 border-b-4 ">
          <p className="text-3xl my-3 font-bold text-blue-700">{brand}</p>
          <img src={image} className=" rounded mx-auto" alt="img-no-found" />
          <h3 className="text-2xl font-bold mt-4">{brand}</h3>
          <h3 className="text-2xl font-bold mt-4">{name}</h3>
          <h3 className="text-2xl font-bold mt-4">{mainFeatures.chipSet}</h3>
          <h3 className="text-2xl font-bold mt-4">
            {mainFeatures.displaySize}
          </h3>
          <h3 className="text-2xl font-bold mt-4">{mainFeatures.memory}</h3>
          <h3 className="text-2xl font-bold mt-4">
            {mainFeatures.sensors.map((e) => (
              <ol>{e}</ol>
            ))}
          </h3>

          <h3 className="text-2xl font-bold mt-4">
            {releaseDate ? releaseDate : "no releaseDate"}
          </h3>
          <ul>{}</ul>
        </div>
      </div>
      <button
        onClick={handlerGoToBreak}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Break
      </button>
      <button
        onClick={orderFromLink}
        class="ml-12 mb-12 bg-lime-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Order From
      </button>
    </div>
  );
};

export default PostDetails;
