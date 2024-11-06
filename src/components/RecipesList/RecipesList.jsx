import recipesData from "../../data/recipesData.json"
import RecipesCard from "../RecipesCard/RecipesCard"
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
    console.log(recipesCopy)

    setRecipesArray(recipesCopy)
}

function deleteItem(id){

    const anotherCopy = recipesArray.filter((food)=>{
        if (food.id !== id){
            return food
        }
        return 
    })

    console.log(anotherCopy)
    setRecipesArray(anotherCopy)
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