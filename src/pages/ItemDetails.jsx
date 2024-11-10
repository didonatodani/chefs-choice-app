import RecipesCard from "../components/RecipesCard/RecipesCard";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipesData.json";

function ItemDetails() {
  const { recipeId } = useParams();
  console.log("This is the ID: ", recipeId);

  const recipe = recipesData.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return <h1>Details not found</h1>;
  } //Cambio, borrar este codigo para dejarlo igual

  //Se ha añadido el componente
  return (
    <>
      <RecipesCard recipe={recipe} />
    </>
  );
}

export default ItemDetails;
