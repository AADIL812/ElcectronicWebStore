import React from "react";
import axios from 'axios'
import { useState } from "react";
export async function getCart(id){
  const api=`https://electronic-webstore.vercel.app/cart/${id}`;
  const response=await axios.get(api);
  console.log(response.data);
  return response;
}

export async function increaseQty(user_id,prod_id,prod_brand,prod_name,price){
    const api='https://electronic-webstore.vercel.app/add';

    const response=await axios.post(api,{user_id,prod_id,prod_brand,prod_name,price});
    if (response.status==200){
      console.log('Item added successfull');
    }
    else{
      console.log('Item not added successfully');
    }
}

export async function decreaseQty(user_id,prod_id){
  const api='https://electronic-webstore.vercel.app/cart/delete';
  const response=await axios.post(api,{user_id,prod_id});
  if (response.status==200){
    console.log('Item deleted successfully');
  }
  else{
    console.log('Item deletion unsuccessful');
  }
  
}

export async function deleteCart(userid){
  const api=`https://electronic-webstore.vercel.app/${userid}`;
  const response=axios.delete(api);
}

