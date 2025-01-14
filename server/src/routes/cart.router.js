const {httpaddToCart,httpGetCart}=require('./cart.controller');
const express=require('express')
const cartRouter=express.Router();

cartRouter.post('/add',httpaddToCart);
cartRouter.get('/:userid',httpGetCart);
module.exports={cartRouter};