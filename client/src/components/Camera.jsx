import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ItemCard from "./ItemCard";
import Loader from "./Loader";
import axios from "axios";

const Camera = () => {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const api='http://localhost:5000/camera';
  const fetchAllCameras = async () => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(api);
      setCameras(response.data);
    } catch (error) {
      console.error("Error fetching cameras:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchCamerasByBrand = async (brand) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(api+`/brand/${brand}`, );
      setCameras(response.data);
    } catch (error) {
      console.error("Error fetching cameras by brand:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchCamerasByBudget = async (lowerPrice, upperPrice) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(api+'budget', {
        params: { lowerPrice, upperPrice },
      });
      setCameras(response.data);
    } catch (error) {
      console.error("Error fetching cameras by budget:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    fetchAllCameras();
  }, []);

  // CSS styles for the grid layout
  const styles = {
    container: {
      padding: "16px",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "2rem",
      color: "#1e40af",
    },
    itemList: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
      gap: "20px",
      justifyContent: "center",
      padding: "20px",
    },
  };

  return (
    <div style={styles.container}>
      {loading ? (
        <Loader /> // Display loader while loading
      ) : (
        <>
          <h1 style={styles.header}>Cameras</h1>
          <FilterBar
            onBrandSearch={fetchCamerasByBrand}
            onPriceFilter={fetchCamerasByBudget}
          />
          <div style={styles.itemList}>
            {cameras.map((camera) => {
              const brand = camera.Model && camera.Model.split(" ")[0]; // Extract the first word from the model as the brand
              return (
                <ItemCard
                  key={camera._id}
                  model={camera.Model}
                  brand={brand}
                  price={camera.Price}
                  prodid={camera._id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Camera;
