import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ItemCard from "./ItemCard";
import axios from "axios";

const Camera = () => {
  const [cameras, setCameras] = useState([]);

  const fetchAllCameras = async () => {
    const response = await axios.get("http://localhost:5000/camera");
    console.log(response);
    setCameras(response.data);
  };

  const fetchCamerasByBrand = async (brand) => {
    const response = await axios.get(`http://localhost:5000/camera/brand/${brand}`);
    setCameras(response.data);
  };

  const fetchCamerasByBudget = async (lowerPrice, upperPrice) => {
    const response = await axios.get(`http://localhost:5000/camera/budget`, {
      params: { lowerPrice, upperPrice },
    });
    setCameras(response.data);
  };

  useEffect(() => {
    fetchAllCameras();
  }, []);

  return (
    <div>
      <h1>Cameras</h1>
      <FilterBar
        onBrandSearch={fetchCamerasByBrand}
        onPriceFilter={fetchCamerasByBudget}
      />
      <div className="item-list">
        {cameras.map((camera, index) => {
          const brand = camera.Model && camera.Model.split(" ")[0]; // Extract the first word from the model as the brand
          return (
            <ItemCard
              key={camera._id}
              model={camera.Model}
              brand={brand}
              price={camera.Price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Camera;

