import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Signin from "./components/Signin.jsx";
import Laptop from "./components/Laptop.jsx";
import Home from "./components/Home.jsx";
import Mobile from "./components/Mobile.jsx";
import Camera from "./components/Camera.jsx";
import TV from "./components/TV.jsx";
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
