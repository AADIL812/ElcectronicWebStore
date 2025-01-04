import "./App.css";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
//import { BrowserRouter } from "react-router-dom";
//import Signin from "./components/Signin";
import Mobile from "../components/Mobile";
import Laptop from "../components/Laptop";
import Camera from "../components/Camera";
import TV from "../components/TV";
import { Outlet } from "react-router-dom";
function App() {
  let [comp, setComp] = useState("home");
  return (
    <>
      <div className="grp1">
        <div className="grp2">
          <Sidebar comp={comp} setcomp={setComp} />
          <Footer />
        </div>
        <Outlet></Outlet>
        {/* {comp === "home" && <Home />}
        {comp === "laptop" && <Laptop />}
        {comp === "camera" && <Camera />}
        {comp === "mobile" && <Mobile />}
        {comp === "tv" && <TV />} */}
      </div>
    </>
  );
}

export default App;
