import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, deleteRecipe } = useContext(RecipeContext);
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h3>Ingredients:</h3>
      <ul>{recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}</ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <Link to={`/edit/${id}`}>Edit</Link>
      <button onClick={() => { deleteRecipe(recipe.id); window.location.href = '/'; }}>Delete</button>
    </div>
  );
};

export default RecipeDetails;
