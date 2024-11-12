import RecipesList from "../components/RecipesList/RecipesList";

function Dashboard({ recipesArray, setRecipesArray }) {
  return (
    <>
      <RecipesList
        recipesArray={recipesArray}
        setRecipesArray={setRecipesArray}
      />
    </>
  );
}

export default Dashboard;
