const {httpGetCart ,httpincreaseQty,httpdecreaseQty,httpDeleteCart  }= require('./cart.controller')
const express=require('express')
const cartRouter=express.Router();

cartRouter.post('/add',httpincreaseQty);
cartRouter.get('/:userid',httpGetCart);
cartRouter.post('/delete',httpdecreaseQty);
cartRouter.delete('/delete/:userid',httpDeleteCart  );
module.exports={cartRouter};