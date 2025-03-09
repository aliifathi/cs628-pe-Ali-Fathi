import React from "react";
import { useParams } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();

  return <h1>Edit Recipe ID: {id}</h1>;
};

export default EditRecipe;
