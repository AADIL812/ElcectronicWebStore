const {cameraController}=require('./camera.router');
const {laptopRouter}=require('./laptop.router');
const {mobileRouter} =require('./mobile.router');
const {tvRouter}=require('./tv.router');
const express=require('express');
const api=express.Router();

api.use('/camera',cameraController);
api.use('/laptop',laptopRouter);
api.use('/phone',mobileRouter);
api.use('/tv',tvRouter);
module.exports={api};