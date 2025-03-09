import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <Link to="/add">Add Recipe</Link>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
