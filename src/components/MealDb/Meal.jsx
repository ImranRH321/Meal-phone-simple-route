import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, idMeal, strArea, strCategory } = meal;

  const navigate = useNavigate();

  const handlerAddDetails = () => {
    navigate(`/meals/${idMeal}`);
  };
  return (
    <div className="bg-lime-300 hover:bg-blue-100 hover:text-black duration-500 p-2 border-b-4 relative h-[480px]">
      <img src={strMealThumb} alt="img-no-found" />
      <h3 className="text-1xl mt-4">{strArea}</h3>
      <h3 className="text-3xl mt-4">{strMeal.slice(0, 30)}</h3>
      <p>{strCategory}</p>
      <button
        onClick={handlerAddDetails}
        class="bg-orange-400 font-serif absolute bottom-0 text-black font-bold py-2 px-4 rounded"
      >
        See More
      </button>
      {/* <Link to={`/meals/${idMeal}`}>LinkAdd</Link> */}
    </div>
  );
};

export default Meal;
