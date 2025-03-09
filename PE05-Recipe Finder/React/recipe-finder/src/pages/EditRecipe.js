import { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipe = () => {
  const { id } = useParams();
  const { recipes, updateRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === Number(id));
  
  const [updatedRecipe, setUpdatedRecipe] = useState(recipe || { name: '', ingredients: '', instructions: '' });

  const handleChange = (e) => {
    setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(Number(id), { ...updatedRecipe, ingredients: updatedRecipe.ingredients.split(', ') });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={updatedRecipe.name} onChange={handleChange} required />
      <input name="ingredients" value={updatedRecipe.ingredients} onChange={handleChange} required />
      <textarea name="instructions" value={updatedRecipe.instructions} onChange={handleChange} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRecipe;
