import { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ name: '', ingredients: '', instructions: '' });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ ...recipe, ingredients: recipe.ingredients.split(', ') });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Recipe Name" onChange={handleChange} required />
      <input name="ingredients" placeholder="Ingredients (comma separated)" onChange={handleChange} required />
      <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
