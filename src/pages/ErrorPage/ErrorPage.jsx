import React from "react";
import Lottie from "lottie-react";
import reader from "../../assets/reader.json";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <div className="min-h-full bg-white">
        <Lottie animationData={reader} loop={true}></Lottie>
      </div>
      <div></div>
    </>
  );
};

export default ErrorPage;
