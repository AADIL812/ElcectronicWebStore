import React, { useState, useContext } from 'react';
import { getCart, increaseQty, decreaseQty, deleteCart } from './Addtocart'; // Importing the deleteCart function
import { userContext } from '../Userprovider'; // Importing the userContext

const Cart = () => {
  const [cart, setCart] = useState([]); // State to hold the fetched cart data
  const [loading, setLoading] = useState(false); // State for loading indicator
  const { user } = useContext(userContext); // Getting the user from context
  const userid = user?.userid; // Safely access `userid` if user exists

  // Function to fetch cart data and update the state
  const fetchCart = async () => {
    if (userid) {
      try {
        setLoading(true); // Start loading
        console.log('Fetching cart...');
        const userCart = await getCart(userid); // Fetch the cart using the `getCart` function
        console.log('Cart data:', userCart);
        const cartItems = userCart?.data?.items || []; // Adjust based on actual data structure
        setCart(cartItems); // Update the cart state with the fetched items
      } catch (error) {
        console.error('Error fetching cart:', error); // Log errors if any
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  // Function to delete the cart
  const handleDeleteCart = async () => {
    if (userid) {
      try {
        setLoading(true); // Start loading
        await deleteCart(userid); // Call the deleteCart function
        setCart([]); // Clear the cart in the frontend
        console.log('Cart deleted successfully');
      } catch (error) {
        console.error('Error deleting cart:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  // Update quantity for a specific item
  const updateQuantity = (prod_id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.prod_id === prod_id
          ? { ...item, quantity: item.quantity + change }
          : item
      )
    );
  };

  return (
    <div>
      <h2>USER CART</h2>
      {userid ? (
        <div>
          <button onClick={fetchCart}>Fetch Cart</button> {/* Button to trigger cart fetching */}
          <button 
            onClick={handleDeleteCart} 
            style={{ marginLeft: '10px', color: 'red' }}
          >
            Delete Cart
          </button> {/* Button to delete the entire cart */}
          {loading ? (
            <h2>Loading...</h2> // Show loading indicator while fetching
          ) : cart.length === 0 ? (
            <h2>CART IS EMPTY. ADD ITEMS</h2>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <h3>{item.name}</h3>
                  <p>
                    Quantity: {item.quantity}
                    <button
                      onClick={() => {
                        updateQuantity(item.prod_id, 1);
                        increaseQty(userid, item.prod_id); // Call increaseQty API
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        if (item.quantity >= 1) {
                          updateQuantity(item.prod_id, -1);
                          decreaseQty(userid, item.prod_id); // Call decreaseQty API
                        }
                      }}
                    >
                      -
                    </button>
                  </p>
                  <p>Price: {item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <h2>Did not login yet. Go to homepage and login</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
