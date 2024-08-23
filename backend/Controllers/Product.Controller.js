const ProductModel = require("../Models/Product.Model");
//add Product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      image,
      status,
      reviews,
      category,
      color,
      brand,
      ref,
      weight,
    } = req.body;
    const newProduct = new ProductModel({
      name,
      price,
      description,
      image,
      status,
      reviews,
      category,
      color, 
      brand,
      ref,
      weight,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", newProduct: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" , error: error });
  }
};
//delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      price,
      description,
      image,
      status,
      reviews,
      category,
      color,
      brand,
      ref,
      weight,
    } = req.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        image,
        status,
        reviews,
        category,
        color,
        brand,
        ref,
        weight,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateProduct, addProduct, deleteProduct };
