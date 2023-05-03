import React, { useContext } from "react";
import ChefInfoCard from "./ChefInfoCard";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ChefInfo = () => {
  const allChefInfos = useContext(AuthContext);
  const chefInfos = allChefInfos.chefInfo;
  const { id } = useParams();
  const singleChefData = useLoaderData();

  return (
    <div>
      <h2 className="font-bold text-center my-16 text-5xl">
        <span className="text-red-800">Our</span> Top Chefs
      </h2>

      <div className="grid px-10 gap-8 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chefInfos.map((chefInfo) => (
          <ChefInfoCard key={chefInfo.chefId} value={chefInfo}></ChefInfoCard>
        ))}
      </div>
    </div>
  );
};

export default ChefInfo;
