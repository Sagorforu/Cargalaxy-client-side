import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SignUp from "./components/SignUp/SignUp";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import MyToys from "./components/PrivatePages/MyToys";
import AddToys from "./components/PrivatePages/AddToys";
import AuthProviders from "./components/Providers/AuthProviders";
import AllToys from "./components/AllToys/AllToys";
import SingleToy from "./components/AllToys/SingleToy";
import PrivateRoute from "./components/Routes/PrivateRoute";
import UpdateToys from "./components/AllToys/UpdateToys";
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
      {
        path: "/singleToy/:id",
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({params}) => fetch(`https://car-galaxy-server.vercel.app/singleToy/${params.id}`)
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/addToys",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`https://car-galaxy-server.vercel.app/singleToy/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
