//import { useState } from "react"

function RecipesCard ({recipe:{ id, name, calories, image, servings}}){

    // const [deleteButton, setDeleteButton] = useState(false);

    // function deleteRecipe(){
    //     df
    // }

    return(
        <div className="recipes-card">
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{calories}</p>
            <p>{servings}</p>
        </div>
    )
}

export default RecipesCard