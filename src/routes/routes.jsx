import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ChefInfo from "../pages/Home/ChefInfo";
import Login from "../pages/Login/Login";
import Registration from "../pages/Register/Register";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <ChefInfo></ChefInfo>,
          },
        ],
      },
      {
        path: "/:id",
        element: <RecipeDetails></RecipeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-lizaafrin.vercel.app/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
