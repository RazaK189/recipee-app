import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./stars";
import FetchData from "./FetchNutrition";
import {CardMedia} from '@mui/material/';
import "../styles/Search.css";

const Item = ({ Dishes }) => {
  const { itemId } = useParams();
  const currentItem = Dishes.filter((entry) => {
    return entry.id === itemId;
  });

  const { name, steps, ingredients, img } = currentItem[0];
  const [search] = useState([name]);

  return (
    <>
    <div class = "name"> 
        {name}
    </div>

    <CardMedia class = "img"
        component="img"
        height="600"
        width="900"
        image={img}
      />
    
    <StarRating />
    
    <div class = "ingredients">
    <h2>Ingredients</h2>

    
      {ingredients.map((ingredient) => (
        <span key={ingredient.name}>
         <li>{ingredient.quantity} {ingredient.type}</li>
        </span>
        ))}
  </div>
  
    <div class = "steps">
      <h2>Steps</h2>
        {steps}
    </div>
     

       <div class = "Nutrtion"> 
       
          <FetchData query={search} />
      </div>

  </>
    
  );
}

export default Item;
