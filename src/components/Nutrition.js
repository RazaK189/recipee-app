import React from "react"

import "../styles/table.css";

const Nutrition = ({ item }) => {
  return (
    <>
    <h1> Nutrtion </h1>
   
    
      <table class = "table"> 
        <tr>
            <td>Sugar</td>
            <td>{item.sugar_g} g</td>
          </tr>

        <tr>
            <td>Fiber</td>
            <td>{item.fiber_g} g</td>
          </tr>

          <tr>
            <td>Sodium</td>
            <td>{item.sodium_mg} mg</td>
          </tr>

          <tr>
            <td>Potassium</td>
            <td>{item.potassium_mg} mg</td>
          </tr>

          <tr>
            <td>Serving size</td>
            <td>{item.serving_size_g} g</td>
          </tr>

          <tr>
            <td>Calories</td>
            <td>{item.calories}</td>
          </tr>

          <tr>
            <td>Cholesterol</td>
            <td>{item.cholesterol_mg} mg</td>
          </tr>
         
          <tr>
            <td>Saturated fat</td>
            <td>{item.fat_saturated_g} g</td>
          </tr>

          <tr>
            <td>Protein</td>
            <td>{item.protein_g} g</td>
          </tr>

          <tr>
            <td>Carbohydrates</td>
            <td>{item.carbohydrates_total_g} g</td>
          </tr>
        
         </table>
         </>

  );
};
export default Nutrition;
