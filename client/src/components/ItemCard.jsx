import React, { useContext } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import {getCart,increaseQty,decreaseQty} from "./Addtocart"
import { userContext } from "../Userprovider"; // Import userContext
import { useState } from "react";
const ItemCard = ({ model, brand, price,prodid }) => {
  const {user}=useContext(userContext);
  const [qty,setqty ]=useState(0);

  async function addele(userid,prodid,prod_brand,prod_name,price)
  {
    if (user==null)
    {
      console.log('Not logged in');
      window.alert('Please login to add item to cart');
    }
    setqty(qty+1);
     await increaseQty(userid,prodid,prod_brand,prod_name,price);
     
  }
  async function delEle(userid,prodid)
  {
    if (user==null)
      {
        console.log('Not logged in');
        window.alert('Please login to do any operations on cart');
      }
      setqty(qty-1);
    await decreaseQty(userid,prodid);
    
  }
  return (
    <div className="item-card">
      <h3>Model: {model}</h3>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>
      <div>
      <IoIosAddCircle onClick={()=>addele(user.userid,prodid,brand,model,price)} ></IoIosAddCircle>
      <div>
        {qty}
      </div>
      <FaMinusCircle onClick={()=>delEle(user.userid,prodid)}></FaMinusCircle>
      </div>
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

