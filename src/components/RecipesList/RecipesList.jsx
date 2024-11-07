import recipesData from "../../data/recipesData.json"
import RecipesCard from "../RecipesCard/RecipesCard"
import "./RecipesList.css"
import { useState } from "react"

function RecipesList (){

const [recipesArray, setRecipesArray] = useState(recipesData)

function sortRecipes(){
    
    const recipesCopy = [...recipesArray]

    recipesCopy.sort((a,b)=>{
        const calA = a.calories;
        const calB = b.calories;

       return  calA - calB
    })

    setRecipesArray(recipesCopy)
}

function deleteItem(id){

    const anotherCopy = recipesArray.filter((food)=>{
        //THIS CAN BE SIMPLIFIED:
        // if (food.id !== id){
        //     return food TRUTHY
        // }
        // return FALSY
        return food.id !== id //TRUE OR FALSE
    })

    setRecipesArray(anotherCopy) //TO UPDATE THE ARRAY
}

    return(
        <section className="recipes-list-container">

            <button onClick={sortRecipes}>Sort by calories</button>
            {
                recipesArray.map((recipe)=>(
                    <div key={recipe.id}>
                        <RecipesCard  recipe={recipe}/>
                        <button onClick={() => deleteItem(recipe.id)}>X</button>
                    </div>
                ))
            }

        </section>
    )
}

export default RecipesList