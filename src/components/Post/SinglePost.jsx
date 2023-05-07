import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({ phone }) => {
  const { image, phone_name, slug, brand } = phone;
  // const navigate = useNavigate();
  // const handlerButtonClick = () => {
  //   navigate(`/friendPost/${slug}`);
  // };
  return (
    <div className="bg-lime-300  hover:bg-lime-400 duration-500 p-2 border-b-4 relative h-[430px]">
      <p className="text-3xl my-3 font-bold text-blue-700">{brand}</p>
      <img src={image} className="rounded border-8" alt="img-no-found" />
      <h3 className="text-2xl font-bold mt-4">{phone_name.slice(0, 13)}</h3>
      <p>{slug.slice(0, 23)}</p>
      <div className="">
        <Link className="absolute bottom-0 " to={`/friendPost/${slug}`}>
          <button class="bg-blue-500 hover:bg-blue-700 w-[w-50] mx-auto text-white font-bold py-2 px-4 rounded">
            PhoneDetails
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
