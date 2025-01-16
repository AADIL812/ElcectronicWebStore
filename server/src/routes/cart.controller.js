const { getCart,increaseQty,decreaseQty}= require('../models/addtoCart.model');

async function httpincreaseQty(req,res){
    const {user_id,prod_id,prod_brand,prod_name,price}=req.body;
    try{
        const cart=await increaseQty(user_id,prod_id,prod_brand,prod_name,price);
        res.status(200).json({msg:"the item has been added to cart ",cart});
    }catch(error)
    {
        res.status(500).json({msg:"Item could not be added"})
    }
}

async function httpdecreaseQty(req,res){
    const {user_id,prod_id}=req.body;
    try{
        const cart=await decreaseQty(user_id,prod_id);
        console.log(cart);
        if (cart!=null){
            res.status(200).json({msg:"Product count decreased",cart});
        }else{
            res.status(500).json({msg:"Error reducing"});
        }
    }catch(error){
        res.status(500).json({msg:"Some error"});
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

        if (cart!=null){
            res.status(200).json(cart);
        } else {
            res.status(404).json({ msg: "Cart is empty or user not found" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Failed to get cart details", error: error.message });
    }
}

module.exports = { httpincreaseQty, httpGetCart ,httpdecreaseQty};
