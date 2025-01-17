const { MongoClient } = require('mongodb');
const mongo_url = "mongodb+srv://Aadil:1234@laptop.ahrgz.mongodb.net/?retryWrites=true&w=majority&appName=Laptop";

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


async function increaseQty(userid,prod_id,prod_brand,prod_name,price)
{
    const client=new MongoClient(mongo_url);
    try{
        await client.connect();
        const db=client.db('ELectronic-webstore');
        const collection=db.collection('Cart');
        const cart=await collection.findOne({user:userid});
      //console.log(cart);
        if (cart) {
            const itemindex=cart.items.findIndex(item=>item.prod_id.toString()==prod_id); 
            console.log(itemindex);
            if (itemindex>-1)
            {
                cart.items[itemindex].quantity=cart.items[itemindex].quantity+1;
                console.log( cart.items[itemindex].quantity);
            }
            else
            {
                cart.items.push({
                    prod_id: prod_id,
                    quantity: 1,
                    brand: prod_brand,
                    price: price,
                    name: prod_name,
                });
            }
            await collection.updateOne({user:userid},{$set:{items:cart.items}});
            return cart;
        }else{
            const newCart = {
                user: userid,
                items: [
                    {
                        prod_id: prod_id,
                        quantity: 1,
                        brand: prod_brand,
                        price: price,
                        name: prod_name,
                    },
                ],
            };
          //  console.log(newCart);
            await collection.insertOne(newCart);
            return newCart;

        }
    }catch(error)
    {
        console.log("Error fetching details");
    }finally{
        await client.close();
    }
}


async function decreaseQty(userid,prod_id)
{
    const client=new MongoClient(mongo_url);
    try{
       
        await client.connect();
        console.log('Connected to mongo');
        const db=client.db('ELectronic-webstore');
        const collection=db.collection('Cart');
        const cart =await collection.findOne({user:userid});
        //console.log(cart);
        if (cart){
            const index=cart.items.findIndex(item=>item.prod_id.toString()==prod_id);
            if (index>-1)
            {
                cart.items[index].quantity=cart.items[index].quantity-1;
                if (cart.items[index].quantity==0){
                    cart.items.splice(index,1);
                    return cart;
                }
                await collection.updateOne({ user: userid }, { $set: { items: cart.items } });
            }
            else{
                return null;
                console.log(' Not possible');
            }
            await collection.updateOne({user:userid},{$set:{items:cart.items}});
        }else{
            return null;
        }
    }catch(error){
        console.log('Error reducing count');
    }finally{
        await client.close();
    }
}
module.exports={getCart,increaseQty,decreaseQty};