import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const singleChefData = useLoaderData();

  console.log(id);

  return (
    <div>
      <h2>Chef Data Comming</h2>
    </div>
  );
};

export default RecipeDetails;
