const { MongoClient } = require('mongodb');
const mongo_url = "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

async function addToCart(prod_id, qty, price, user_id, prod_name, prod_brand) {
    const client = new MongoClient(mongo_url);

    try {
        await client.connect();

        const db = client.db('ELectronic-webstore');
        const collection = db.collection('Cart');

        // Check if the cart exists for the user
        let cart = await collection.findOne({ user: user_id });

        if (cart) {
            // Find the product in the cart
            const itemIndex = cart.items.findIndex(item => item.prod_id.toString() === prod_id);

            if (itemIndex > -1) {
                // Update the quantity if product exists
                cart.items[itemIndex].quantity += qty;
            } else {
                // Add new item to the cart
                cart.items.push({
                    prod_id: prod_id,
                    quantity: qty,
                    brand: prod_brand,
                    price: price,
                    name: prod_name,
                });
            }

            // Update the cart in the database
            await collection.updateOne({ user: user_id }, { $set: { items: cart.items } });
        } else {
            // Create a new cart for the user
            const newCart = {
                user: user_id,
                items: [
                    {
                        prod_id: prod_id,
                        quantity: qty,
                        brand: prod_brand,
                        price: price,
                        name: prod_name,
                    },
                ],
            };

            await collection.insertOne(newCart);
            return newCart;
        }

        console.log("Cart updated successfully.");
        return cart;
    } catch (error) {
        console.error("Error updating the cart:", error);
    } finally {
        // Ensure the client connection is closed
        await client.close();
    }
}

async function getCart(userid)
{
    const client=new MongoClient(mongo_url);
    try{
        await client.connect();
        const db=client.db('ELectronic-webstore');
        const collection=db.collection('Cart');
        const cart=await collection.findOne({user:userid});
        return cart;
    }catch(error){
        console.log("Error fetching cart details");
    }finally{
        await client.close();
    }
}
module.exports={addToCart,getCart};