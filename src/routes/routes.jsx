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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import RecipeDetailsLayout from "../layouts/RecipeDetailsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/recipes",
      //   element: (
      //     <PrivateRoute>
      //       <RecipeDetails></RecipeDetails>
      //     </PrivateRoute>
      //   ),
      // },
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
  {
    path: "/recipes/:id",
    element: <RecipeDetailsLayout></RecipeDetailsLayout>,
    children: [
      {
        path: "/recipes/:id",
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-lizaafrin.vercel.app/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
