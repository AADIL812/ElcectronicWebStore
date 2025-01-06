const {httpgetAllCameras,httpgetCamerabyBrand,httpgetCamerasByBudget}=require('./camera.controller')
const express=require('express');
const cameraController=express.Router();

cameraController.get('/',httpgetAllCameras);
cameraController.get('/brand/:brand',httpgetCamerabyBrand);
cameraController.get('/budget', httpgetCamerasByBudget);
module.exports={cameraController};