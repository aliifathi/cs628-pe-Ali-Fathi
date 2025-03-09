import React from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        <li>
          <Link to="/recipe/1">View Recipe 1</Link>
        </li>
        <li>
          <Link to="/add">Add a Recipe</Link>
        </li>
      </ul>
    </div>
  );
};

export default RecipeList;
