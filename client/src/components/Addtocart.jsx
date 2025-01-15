import React from "react";
import axios from 'axios'
import { useState } from "react";
export async function getCart(id){
  const api=`http://localhost:5000/cart/${id}`;
  const response=await axios.get(api);
  console.log(response.data);
  return response;
}

export async function increaseQty(user_id,prod_id,prod_brand,prod_name,price){
    const api='http://localhost:5000/cart/add';

    const response=await axios.post(api,{user_id,prod_id,prod_brand,prod_name,price});
    if (response.status==200){
      console.log('Item added successfull');
    }
    else{
      console.log('Item not added successfully');
    }
}

export async function decreaseQty(user_id,prod_id){
  const api='http://localhost:5000/cart/delete';
  const response=await axios.post(api,{user_id,prod_id});
  if (response.status==200){
    console.log('Item deleted successfully');
  }
  else{
    console.log('Item deletion unsuccessful');
  }
  
}