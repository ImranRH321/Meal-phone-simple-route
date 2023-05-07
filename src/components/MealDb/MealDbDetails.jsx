import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const MealDbDetails = () => {
  const { meals } = useLoaderData();
  console.log("myMeal", meals);

  return (
    <div>
      <h1 className="text-3xl text-right mx-5 my-4 font-bold text-purple-400">
        {/* Meal Details page {meals.length}  */}
      </h1>
      <div className="myContainer">
        {meals.map((element) => {
          const {
            strMealThumb,
            strInstructions,
            strMeal,
            strYoutube,
            idMeal,
            strArea,
            strCategory,
          } = element;
          //  navigate parent  
          const navigate = useNavigate()
          const handleGoBack = () => {
            navigate(-1);
          };

          const orderFromLink = () => {
            navigate(`/contact`);
          };
        
          return (
            <div className="md:flex justify-center items-center gap-4 hover:bg-lime-400 duration-500  border-b-4 border-t-4 border-l-4 border-r-4 p-5">
              <img
                className="mx-auto border-8 w-[300px] h-[300px]"
                src={strMealThumb}
                alt="img-no-found"
              />
              <div className="w-[50%]">
                <h3 className="text-1xl mt-4">{strArea}</h3>
                <h3 className="text-2xl mt-4">{strCategory}</h3>
                <h3 className="text-3xl mt-4">{strMeal}</h3>
                <p>{strCategory}</p>
                <p>{strInstructions}</p>
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>

                {/* akane youtube keno kaj kore na  */}
                {/* <iframe
                  width="420"
                  height="315"
                  src={strYoutube}
                ></iframe> */}

                <button
                  onClick={handleGoBack}
                  className="mt-5 w-[160px]  bg-black text-white p-2"
                >
                 breakOf
                </button>
                <button
                  onClick={orderFromLink}
                  className="mt-5 w-[160px] ms-11  bg-orange-400 text-black font-bold p-2"
                >
                 OrderForm
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealDbDetails;
