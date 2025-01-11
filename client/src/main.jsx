import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Home from "./components/Home.jsx";
import Laptop from "./components/Laptop.jsx";
import Mobile from "./components/Mobile.jsx";
import Camera from "./components/Camera.jsx";
import TV from "./components/TV.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Laptop", element: <Laptop /> },
      { path: "/Mobile", element: <Mobile /> },
      { path: "/Camera", element: <Camera /> },
      { path: "/TV", element: <TV /> },
      { path: "/signin", element: <Signin /> }, // Route for Signin
      { path: "/signup", element: <Signup /> }, // Route for Signup
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
