
import "./RecipesCard.css"

function RecipesCard({recipe}) {

  return (
    <>
      
      <img src={recipe.image} alt="imagen recipe" className="recipe-img"/>
      <h2>{recipe.name}</h2>
    </>
  );
}

export default RecipesCard;