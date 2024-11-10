//no esta funcionando el useParams
//import { useParams } from "react-router-dom";

//tot ok
//import recipesData from "../../data/recipesData.json"; Dejo de importar esto de nuevo

function RecipesCard({ recipe: {image, calories, description, servings} }) {
  //Añado un destructure

  //no está recibiendo el id:
  //const {recipeId} = useParams();
  //console.log("This is the ID: ",recipeId); //Undefined

  //console.log("This is teh ID: ", recipeId);

  /*const recipeDetail = recipesData.find((recipe) => {
    // console.log(typeof recipe.id);
    // console.log(typeof recipeId)
    return recipe.id == recipeId
    ;
  }); */
  //si cambiamoS recipeId por un id real(por ej "9e7f0d61-aa6b-418a-b56a-6418d19e6e1d", SÍ FUNCIONA EL RENDERIZADO)

  return (
    <div className="recipes-card">
      <img src={image} alt="" />
      <h1>{calories}</h1>
      <p>{description}</p>
      <p>{servings}</p>
      <div>
        <button>Details</button>
      </div>
    </div>
  );
}

export default RecipesCard;
