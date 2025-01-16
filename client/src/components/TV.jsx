import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ItemCard from "./ItemCard";
import Loader from "./Loader";
import axios from "axios";

const TV = () => {
  const [tvs, setTVs] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchAllTVs = async () => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get("http://localhost:5000/tv");
      setTVs(response.data);
    } catch (error) {
      console.error("Error fetching TVs:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchTVsByBrand = async (brand) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`http://localhost:5000/tv/brand/${brand}`);
      setTVs(response.data);
    } catch (error) {
      console.error("Error fetching TVs by brand:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchTVsByBudget = async (lowerPrice, upperPrice) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`http://localhost:5000/tv/budget`, {
        params: { lowerPrice, upperPrice },
      });
      setTVs(response.data);
    } catch (error) {
      console.error("Error fetching TVs by budget:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    fetchAllTVs();
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
          <h1 style={styles.header}>Televisions</h1>
          <FilterBar
            onBrandSearch={fetchTVsByBrand}
            onPriceFilter={fetchTVsByBudget}
          />
          <div style={styles.itemList}>
            {tvs.map((tv) => {
              return (
                <ItemCard
                  key={tv._id}
                  model={tv.Resolution}
                  brand={tv.Brand}
                  price={tv["Selling Price"]}
                  prodid={tv._id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TV;
