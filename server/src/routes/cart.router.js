const {httpGetCart ,httpincreaseQty,httpdecreaseQty}  =  require('./cart.controller')
const express=require('express')
const cartRouter=express.Router();

cartRouter.post('/add',httpincreaseQty);
cartRouter.get('/:userid',httpGetCart);
cartRouter.post('/delete',httpdecreaseQty);
module.exports={cartRouter};