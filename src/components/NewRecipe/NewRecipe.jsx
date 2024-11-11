import { useState } from "react";
import { useId } from "react";
import "./NewRecipe.css";

function NewRecipe({ recipesArray, setRecipesArray }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  const id = useId();

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      id: Math.floor(Math.random() * 999999),
      name,
      calories,
      image,
      servings,
    };

    console.log(newRecipe);

    setRecipesArray([...recipesArray, newRecipe]);
  }

  return (
    <form onSubmit={handleSubmit} id="form">
      <input style={{ display: "none" }} id={id} hidden />
      <div className="form-div">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-div">
        <label htmlFor="calories">Calories:</label>
        <input
          type="text"
          id="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div className="form-div">
        <label htmlFor="image">Image url:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="form-div">
        <label htmlFor="servings">Servings:</label>
        <input
          type="text"
          id="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <div className="form-div">
        <button type="submit" id="form-btn">
          Add your recipe!
        </button>
      </div>
    </form>
  );
}

export default NewRecipe;
