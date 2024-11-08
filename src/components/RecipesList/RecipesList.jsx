import recipesData from "../../data/recipesData.json";
import RecipesCard from "../RecipesCard/RecipesCard";
import { useState } from "react";
import NewRecipe from "../NewRecipe/NewRecipe";
import { Link } from "react-router-dom";

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

    setRecipesArray(anotherCopy);
  }

  return (
    <section className="recipes-list-container">
      <NewRecipe
        recipesArray={recipesArray}
        setRecipesArray={setRecipesArray}
      />
      <button onClick={sortRecipes}>Sort by calories</button>
      {recipesArray.map((recipe) => (
        <div key={recipe.id}>
            <Link key={recipe.id} to={`/items/${recipe.id}`}>
                <RecipesCard  recipe={recipe} />
            </Link>
          <button onClick={() => deleteItem(recipe.id)}>X</button>
        </div>
      ))}
    </section>
  );
}

export default RecipesList;
