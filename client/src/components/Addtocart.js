import axios from 'axios';

const BASE_URL = 'http://localhost:5000/cart'; // Use a descriptive name

export async function getCart(id) {
  console.log("Inside getCart");
  const api = `${BASE_URL}/${id}`; // Use BASE_URL properly
  const response = await axios.get(api);
  console.log(response.data);
  return response;
}

export async function increaseQty(user_id, prod_id, prod_brand, prod_name, price) {
  const api = `${BASE_URL}/add`; // Fixing API URL

  try {
    const response = await axios.post(api, { user_id, prod_id, prod_brand, prod_name, price });
    if (response.status === 200) {
      console.log('Item added successfully');
    } else {
      console.log('Item not added successfully');
    }
  } catch (error) {
    console.error('Error adding item:', error);
  }
}

export async function decreaseQty(user_id, prod_id) {
  const api = `${BASE_URL}/delete`; // Fixing API URL
  
  try {
    const response = await axios.post(api, { user_id, prod_id });
    if (response.status === 200) {
      console.log('Item deleted successfully');
    } else {
      console.log('Item deletion unsuccessful');
    }
  } catch (error) {
    console.error('Error deleting item:', error);
  }
}

export async function deleteCart(userid) {
  const api = `${BASE_URL}/delete/${userid}`; // Fixing API URL
  try {
    const response = await axios.delete(api);
    console.log('Cart deleted successfully');
  } catch (error) {
    console.error('Error deleting cart:', error);
  }
}

