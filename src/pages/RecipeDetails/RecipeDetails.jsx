import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import RecipeDetailsCard from "./RecipeDetailsCard";
import ChefBanner from "./ChefBanner";

const RecipeDetails = () => {
  const singleChefdata = useLocation().state;
  const chefName = singleChefdata?.name;

  console.log(singleChefdata);

  const { recipeData } = useContext(AuthContext);
  // console.log(recipesData);
  // const { id } = useParams();
  // const singleChefData = useLoaderData();
  // console.log(singleChefData);

  return (
    <div className="container mx-auto my-12">
      <div>
        <ChefBanner value={singleChefdata}></ChefBanner>
      </div>
      <h2 className="text-center text-3xl font-bold my-8">
        3 best dishes of <span className="text-green-500">{chefName}</span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {recipeData.slice(0, 3).map((recipe) => (
          <RecipeDetailsCard
            key={recipe.recipeName}
            value={recipe}
          ></RecipeDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
