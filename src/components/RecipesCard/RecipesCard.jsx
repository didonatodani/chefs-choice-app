function RecipesCard({recipe}) {

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt="imagen recipe" />
      <h2>{recipe.name}</h2>
    </div>
  );
}

export default RecipesCard;