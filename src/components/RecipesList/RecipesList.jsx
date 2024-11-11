import recipesData from "../../data/recipesData.json";
import RecipesCard from "../RecipesCard/RecipesCard";
import { useState } from "react";
import NewRecipe from "../NewRecipe/NewRecipe";
import { Link } from "react-router-dom";
import "./RecipesList.css";

function RecipesList() {
  const [recipesArray, setRecipesArray] = useState(recipesData);

  function sortRecipes() {
    const recipesCopy = [...recipesArray];

    recipesCopy.sort((a, b) => {
      const calA = a.calories;
      const calB = b.calories;

      return calA - calB;
    });

    setRecipesArray(recipesCopy);
  }

  function deleteItem(id) {
    const anotherCopy = recipesArray.filter((food) => food.id !== id);
    setRecipesArray(anotherCopy); //TO UPDATE THE ARRAY
  }

  return (
    <section className="recipes-list-container">
      <div className="extra-features-div">
        <NewRecipe
          recipesArray={recipesArray}
          setRecipesArray={setRecipesArray}
        />
        <button onClick={sortRecipes} id="sort-btn">Sort by calories</button>
      </div>

      {recipesArray.map((recipe) => (
        <div key={recipe.id} className="recipe-link-div">
          <Link key={recipe.id} to={`/items/${recipe.id}`}>
            <RecipesCard recipe={recipe} />
          </Link>
          <button onClick={() => deleteItem(recipe.id)}>X</button>
        </div>
      ))}
    </section>
  );
}

export default RecipesList;
