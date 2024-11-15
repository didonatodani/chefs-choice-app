import RecipesList from "../components/RecipesList/RecipesList";

function Dashboard({ recipesArray, setRecipesArray }) {
  // fragments are not necessary here because we are returning only one element
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
