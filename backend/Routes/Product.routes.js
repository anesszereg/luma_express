const express = require("express");
const {
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/Product.Controller");
const router = express.Router();

// Define route for creating a new Product
router.post("/addProduct", addProduct);

// Define route for updating an existing Product
router.put("/Product/:id", updateProduct);

// Define route for deleting an existing Product
router.delete("/Product/:id", deleteProduct);

module.exports = router; // Export the router
