const {httpSendEmail}=require('./email.controller')


const express=require('express');

const emailRouter=express.Router();

emailRouter.post('/',httpSendEmail);
module.exports={emailRouter};