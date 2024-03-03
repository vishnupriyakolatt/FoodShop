const express = require('express');
const {Addproduct,viewProducts}=require('../controllers/InventoryController')
const upload = require('../utility/multer');
const InventoryRoutes = express.Router();

InventoryRoutes.post('/addproducts', upload.single('file'), Addproduct);

InventoryRoutes.get('/getallproducts', viewProducts);

module.exports=InventoryRoutes;