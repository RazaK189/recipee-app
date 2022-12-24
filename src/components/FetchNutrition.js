import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";

const FetchData = ({ query }) => {
  const [nutrition, setNutrition] = useState({
    sugar_g: " ",
    fiber_g: " ",
    serving_size_g: " ",
    sodium_mg: " ",
    name: " ",
    potassium_mg: " ",
    fat_saturated_g: " ",
    fat_total_g: " ",
    calories: " ",
    cholesterol_mg: " ",
    protein_g: " ",
    carbohydrates_total_g: " ",
  });

  const fetchData = useCallback(() => {
    const url =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "170a36eadamsh947ae233fd3f26dp1b549ajsnbc324226e5dd", //incase of any possible errors, please try your own unique API KEY
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData);
        if (incomingData.items.length !== 0) {
          setNutrition(incomingData.items[0]);
        }
      });
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  return (
    <div>
      <Nutrition item={nutrition} />
    </div>
  );
};
export default FetchData;
