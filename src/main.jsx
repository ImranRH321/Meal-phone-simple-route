import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Users from "./components/Users/Users.jsx";
import First from "./components/First/First.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Post from "./components/Post/Post.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import MealDb from "./components/MealDb/MealDb.jsx";
import MealDbDetails from "./components/MealDb/MealDbDetails.jsx";
import Contact from "./components/Contact/Contact.jsx";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <div>about page comming</div>,
  },
  {
    path: "blog",
    element: <div>own my blog</div>,
  },
]); */

/* 
// Meals details page click kore funorder click akta page niya jaibo form inpurt flied dekaio . 


*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <First></First> },
      {
        path: "meals",
        element: <MealDb></MealDb>,
      },
      {
        path: "meals/:mealIdFood",
        element: <MealDbDetails></MealDbDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealIdFood}`
          ),
      },
      { path: "/about", element: <About></About> },
      {
        path: "phones",
        element: <Post></Post>,
      },
      {
        path: "friendPost/:lovePost",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/phone/${params.lovePost}`
          ),
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
      },
      {
        path: "/user/:userId",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
