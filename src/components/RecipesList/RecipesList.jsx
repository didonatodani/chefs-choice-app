import RecipesCard from "../RecipesCard/RecipesCard";
import NewRecipe from "../NewRecipe/NewRecipe";
import { Link } from "react-router-dom";
import "./RecipesList.css";
import deleteButton from "../../assets/delete.svg"

function RecipesList({recipesArray, setRecipesArray}) {

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
    // NICE! 💪 
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
            <RecipesCard recipe={recipe} recipesArray={recipesArray} setRecipesArray={setRecipesArray}/>
          </Link>
          <button onClick={() => deleteItem(recipe.id)} className="btn btn-knife"><img src={deleteButton} alt="knife delete button" width={"30px"}/></button>
        </div>
      ))}
    </section>
  );
}

export default RecipesList;
