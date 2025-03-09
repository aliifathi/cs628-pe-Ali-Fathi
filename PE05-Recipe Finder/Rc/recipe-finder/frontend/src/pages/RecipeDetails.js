import React from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();

  return <h1>Recipe Details for ID: {id}</h1>;
};

export default RecipeDetails;
