import { useState } from "react";
import Toast from "../Toast/Toast";
import { toast } from 'react-toastify';

function EditForm({ recipeDetail, setRecipesArray }) {
  //const [editRecipe, setEditRecipe] = useState(recipeDetail)

  const [editName, setEditName] = useState(recipeDetail.name);
  const [editCalories, setEditCalories] = useState(recipeDetail.calories);
  const [editImage, setEditImage] = useState(recipeDetail.image);
  const [editServings, setEditServings] = useState(recipeDetail.servings);
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    recipeDetail.name = editName;
    recipeDetail.calories = editCalories;
    recipeDetail.image = editImage;
    recipeDetail.servings = editServings;

    setRecipesArray((prev) => [...prev]);
    setIsEditing(false);
    toast.success("Recipe edited successfully!");
  }

  return (
    <>
    <Toast />
      {!isEditing ? (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
          className="btn"
        >
          Edit
        </button>
      ) : (
        <>
          <form onSubmit={handleSubmit} id="form">
            <div className="form-div">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="form-div">
              <label htmlFor="calories">Calories:</label>
              <input
                type="text"
                id="calories"
                value={editCalories}
                onChange={(e) => setEditCalories(e.target.value)}
              />
            </div>
            <div className="form-div">
              <label htmlFor="image">Image url:</label>
              <input
                type="text"
                id="image"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
              />
            </div>
            <div className="form-div">
              <label htmlFor="servings">Servings:</label>
              <input
                type="text"
                id="servings"
                value={editServings}
                onChange={(e) => setEditServings(e.target.value)}
              />
            </div>
            <div className="form-div">
              <button type="submit" className="form-btn">
                Save changes
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default EditForm;
