import React, { useState, useContext } from 'react';
import { getCart } from './Addtocart'; // Importing the getCart function
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

  return (
    <div>
      <h2>USER CART</h2>
      {userid ? (
        <div>
          <button onClick={fetchCart}>Fetch Cart</button> {/* Button to trigger cart fetching */}
          {loading ? (
            <h2>Loading...</h2> // Show loading indicator while fetching
          ) : cart.length === 0 ? (
            <h2>CART IS EMPTY. ADD ITEMS</h2>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
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
