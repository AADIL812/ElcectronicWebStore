// routes/auth.routes.js
const express=require('express');

const signinRouter=express.Router();
const {loginUser}=require('./signin.controller')
signinRouter.post('/',loginUser);

module.exports={signinRouter};
