import { useState } from "react";
import { useId } from "react";
import "./NewRecipe.css";
import { toast } from 'react-toastify';
import Toast from "../Toast/Toast";

function NewRecipe({ recipesArray, setRecipesArray }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  const id = useId(); 
  // Why do you need this hook?
  
  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = {
      id: Math.floor(Math.random() * 999999),
      // When you create a new recipe, you are not using the id, you are generating a random id
      name,
      calories,
      image,
      servings,
    };

    setRecipesArray([...recipesArray, newRecipe]);
    setIsAdding(false)
    toast.success("Recipe added successfully!");
  }


  return (
    <>
    <Toast />
      {!isAdding ? (
        <button
          onClick={() => {
            setIsAdding(!isAdding);
          }}
          className="btn"
        >
          Add a recipe!
        </button>
      ) : (
        <>
          {" "}
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
              <button type="submit" className="form-btn">
                Submit
              </button>
            </div>
          </form>
          <button
            onClick={() => {
              setIsAdding(!isAdding);
            }}
            className="form-btn btn"
          >
            Cancel
          </button>{" "}
        </>
      )}
    </>
  );
}

export default NewRecipe;
