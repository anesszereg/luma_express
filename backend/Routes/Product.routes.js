const express = require("express");
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts
} = require("../Controllers/Product.Controller");
const router = express.Router();

// Define route for creating a new Product
router.post("/addProduct", addProduct);

// Define route for updating an existing Product
router.put("/Product/:id", updateProduct);

// Define route for deleting an existing Product
router.delete("/Product/:id", deleteProduct);

//get all products

router.get("/", getProducts);  

module.exports = router; // Export the router
