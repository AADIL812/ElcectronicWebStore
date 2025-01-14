const { addToCart, getCart } = require('../models/addtoCart.model');

async function httpaddToCart(req, res) {
    // Extract required fields from request body
    const { prod_id, qty, price, user_id, prod_name, prod_brand } = req.body;

    // Call addToCart function and handle the result
    const result = await addToCart(prod_id, qty, price, user_id, prod_name, prod_brand);
    if (result.success) {
        res.status(200).json({ msg: "Added successfully", cart: result });
    } else {
        res.status(500).json({ msg: "Failed to add item to cart" });
    }
}

async function httpGetCart(req, res) {
    // Use req.params or req.query for a GET request to get the user ID
    let { userid } = req.params; // Assuming you're using route parameters
    console.log(userid);
    userid=Number(userid);
    console.log(typeof(userid));
    try {
        // Call getCart function with the user ID
        const cart = await getCart(userid);
        if (cart) {
            res.status(200).json(cart);
        } else {
            res.status(404).json({ msg: "Cart is empty or user not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Failed to get cart details", error: error.message });
    }
}

module.exports = { httpaddToCart, httpGetCart };
