import { useState } from "react";
import { useId } from "react";


function NewRecipe({ recipesArray, setRecipesArray }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);

  const id = useId();

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      id: Math.floor(Math.random()* 999999),
      name,
      calories,
      image,
      servings,
    };

    console.log(newRecipe)

    setRecipesArray([...recipesArray, newRecipe]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={{display: "none"}} id={id} />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="calories">Calories:</label>
      <input
        type="text"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <label htmlFor="image">Image url:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="servings">Servings:</label>
      <input
        type="text"
        id="servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <button type="submit">Add your recipe!</button>
    </form>
  );
}

export default NewRecipe;
