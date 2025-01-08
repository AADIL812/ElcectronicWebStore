import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ItemCard from "./ItemCard";
import Loader from "./Loader";
import axios from "axios";

const Laptop = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchAllLaptops = async () => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get("http://localhost:5000/laptop");
      setLaptops(response.data);
    } catch (error) {
      console.error("Error fetching laptops:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchLaptopsByBrand = async (brand) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`http://localhost:5000/laptop/brand/${brand}`);
      setLaptops(response.data);
    } catch (error) {
      console.error("Error fetching laptops by brand:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchLaptopsByBudget = async (lowerPrice, upperPrice) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`http://localhost:5000/laptop/budget`, {
        params: { lowerPrice, upperPrice },
      });
      setLaptops(response.data);
    } catch (error) {
      console.error("Error fetching laptops by budget:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    fetchAllLaptops();
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
          <h1 style={styles.header}>Laptops</h1>
          <FilterBar
            onBrandSearch={fetchLaptopsByBrand}
            onPriceFilter={fetchLaptopsByBudget}
          />
          <div style={styles.itemList}>
            {laptops.map((laptop) => {
              return (
                <ItemCard
                  key={laptop._id}
                  model={laptop.Product}
                  brand={laptop.Company}
                  price={laptop["Price (Euro)"]} // Accessing price with spaces
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Laptop;
