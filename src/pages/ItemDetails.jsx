import { useParams } from "react-router-dom"
import recipesData from "../data/recipesData.json"
import "./ItemDetails.css"

function ItemDetails(){

const { recipeId } = useParams()

const recipeDetail = recipesData.find((recipe) => {
    return recipe.id === recipeId
});

console.log("this is the recipedetail log:" , recipeDetail)

    return(
        <div className="container">
            <h2>{recipeDetail.name}</h2>
            <img src={recipeDetail.image} alt={`imagen de ${recipeDetail.name}`} />
            <p><strong>Calories:</strong> {recipeDetail.calories}</p>
            <p><strong>Servings:</strong> {recipeDetail.servings}</p>
        </div>
    )
}

export default ItemDetails