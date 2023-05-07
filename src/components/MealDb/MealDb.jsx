import React, { useEffect, useState } from "react";
import Meal from "./Meal";

const MealDb = () => {
  const [inputTypeFlied, setInputTypeFlied] = useState("");
 const [myData, setData]  = useState([]);

  useEffect(()=> {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputTypeFlied}`
    ).then(res=> res.json())
    .then(data => setData(data.meals))
  },[inputTypeFlied])

console.log('myData');
  return (
    <div>
      <div className="search_Area bg-lime-400">
        <div class="mb-4 p-8 w-[400px] mx-auto">
          <input
            onChange={(e) => setInputTypeFlied(e.target.value)}
            class="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search Love food"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
        {myData?.map((meal) => (
          <Meal meal={meal} key={meal.id}></Meal>
        ))}
      </div>
    </div>
  );
};

export default MealDb;
