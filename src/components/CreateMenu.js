import { useState, useRef } from "react";
import "../styles/createMenu.css";

 const Create = () => { 
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const [setImage] = useState();
 

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };


  return (
    <div className="create">
    <h2 className="page-title">Create a New Recipe</h2>

      <form>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Steps:</span>
          <textarea
            onChange={(e) => setSteps(e.target.value)}
            value={steps}
            required
          ></textarea>
        </label>

    

        <label>
          <span>Image:</span>
          <input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>

      </form>
    </div>
  );
}

export default Create;