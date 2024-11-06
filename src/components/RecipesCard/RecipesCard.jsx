import "./RecipesCard.css"
function RecipesCard ({recipe:{ id, name, calories, image, servings}}){
    
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