import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    return res.status(501).json({ message: "createProduct not implemented yet" });
  } catch (error) {
    console.error("[controller] createProduct error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    return res.status(501).json({ message: "getAllProducts not implemented yet" });
  } catch (error) {
    console.error("[controller] getAllProducts error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    return res.status(501).json({ message: "getSingleProduct not implemented yet" });
  } catch (error) {
    console.error("[controller] getSingleProduct error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
