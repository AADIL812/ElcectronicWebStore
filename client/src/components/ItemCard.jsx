import React from "react";

const ItemCard = ({ model, brand, price }) => {
  return (
    <div className="item-card">
      <h3>Model: {model}</h3>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>

      <style jsx>{`
        /* Styling for each ItemCard component */
        .item-card {
          background-color: #1e40af; /* Blue background for the card */
          color: white; /* White text color */
          border-radius: 10px; /* Rounded corners */
          padding: 20px;
          text-align: center; /* Center align the text */
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Light shadow for the card */
          transition: transform 0.3s ease-in-out; /* Smooth animation for hover */
        }

        /* Hover effect for the card */
        .item-card:hover {
          transform: scale(1.05); /* Slightly enlarge the card on hover */
        }

        /* Styling for the title, brand, and price */
        .item-card h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .item-card p {
          font-size: 1rem;
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default ItemCard;

