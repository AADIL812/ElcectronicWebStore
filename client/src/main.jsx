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
import Userprovider from "./Userprovider.jsx";
import Cart from "./components/Cart.jsx";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />, // App will act as a layout with Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "/laptop", element: <Laptop /> },
      { path: "/mobile", element: <Mobile /> },
      { path: "/camera", element: <Camera /> },
      { path: "/tv", element: <TV /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      {path:"/cart",element:<Cart/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Userprovider>
      <RouterProvider router={router} />
    </Userprovider>
  </React.StrictMode>
);
