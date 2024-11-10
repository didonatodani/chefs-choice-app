import { useParams } from "react-router-dom"
import recipesData from "../data/recipesData.json"

function ItemDetails(){

const { recipeId } = useParams()

const recipeDetail = recipesData.find((recipe) => {
    return recipe.id === recipeId
});

console.log("this is the recipedetail log:" , recipeDetail)

    return(
        <div>
            <h2>{recipeDetail.name}</h2>
            <img src={recipeDetail.image} alt={`imagen de ${recipeDetail.name}`} />
            <p>Calories: {recipeDetail.calories}</p>
            <p>Servings: {recipeDetail.servings}</p>
        </div>
    )
}

export default ItemDetails