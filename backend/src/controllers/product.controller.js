import mongoose from "mongoose";
import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      brand,
      model,
      retailPrice,
      wholesalePrice,
      inStock,
      isFastMoving,
    } = req.body || {};

    const requiredFields = { name, category, brand, model, retailPrice };
    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => value === undefined || value === null || value === "")
      .map(([key]) => key);

    if (missingFields.length) {
      return res.status(400).json({
        message: "Missing required product fields",
        missingFields,
      });
    }

    const product = new Product({
      name,
      category,
      brand,
      model,
      retailPrice,
      wholesalePrice,
      inStock,
      isFastMoving,
    });

    const savedProduct = await product.save();
    return res.status(201).json(savedProduct);
  } catch (error) {
    console.error("[controller] createProduct error", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Invalid product data", details: error.message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    return res.json(products);
  } catch (error) {
    console.error("[controller] getAllProducts error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Product id is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product id" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    console.error("[controller] getSingleProduct error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
