import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ItemCard from "./ItemCard";
import Loader from "./Loader";
import axios from "axios";

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchAllMobiles = async () => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get("https://electronic-webstore.vercel.app/phone");
      setMobiles(response.data);
    } catch (error) {
      console.error("Error fetching mobiles:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchMobilesByBrand = async (brand) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`https://electronic-webstore.vercel.app/phone/brand/${brand}`);
      setMobiles(response.data);
    } catch (error) {
      console.error("Error fetching mobiles by brand:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const fetchMobilesByBudget = async (lowerPrice, upperPrice) => {
    try {
      setLoading(true); // Show loader
      const response = await axios.get(`https://electronic-webstore.vercel.app/phone/budget`, {
        params: { lowerPrice, upperPrice },
      });
      setMobiles(response.data);
    } catch (error) {
      console.error("Error fetching mobiles by budget:", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    fetchAllMobiles();
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
          <h1 style={styles.header}>Mobiles</h1>
          <FilterBar
            onBrandSearch={fetchMobilesByBrand}
            onPriceFilter={fetchMobilesByBudget}
          />
          <div style={styles.itemList}>
            {mobiles.map((mobile) => {
              return (
                <ItemCard
                  key={mobile._id}
                  model={mobile.phone_name}
                  brand={mobile.brand}
                  price={mobile["price(USD)"]}
                  prodid={mobile._id}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Mobile;
