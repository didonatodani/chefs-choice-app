import { useParams } from "react-router-dom";
import recipesData from "../data/recipesData.json";
import "./ItemDetails.css";
import { useNavigate } from "react-router-dom";
import EditForm from "../components/EditForm/EditForm";


function ItemDetails({ setRecipesArray }) {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const recipeDetail = recipesData.find((recipe) => {
    return recipe.id === recipeId;
  });

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="container">
      <h2>{recipeDetail.name}</h2>
      <img src={recipeDetail.image} alt={`imagen de ${recipeDetail.name}`} />
      <p>
        <strong>Calories:</strong> {recipeDetail.calories}
      </p>
      <p>
        <strong>Servings:</strong> {recipeDetail.servings}
      </p>
      <div>
        <EditForm
          recipeDetail={recipeDetail}
          setRecipesArray={setRecipesArray}
        />
        <button className="form-btn" onClick={handleSubmit}>Go back</button>
      </div>
    </div>
  );
}

export default ItemDetails;
