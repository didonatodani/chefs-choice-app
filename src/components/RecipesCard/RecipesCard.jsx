import "./RecipesCard.css"

function RecipesCard({recipe}) {

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt="imagen recipe" className="recipe-img"/>
      <h2>{recipe.name}</h2>
    </div>
  );
}

export default RecipesCard;