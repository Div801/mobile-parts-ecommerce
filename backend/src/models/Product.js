import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    retailPrice: { type: Number, required: true },
    wholesalePrice: { type: Number },
    inStock: { type: Boolean, default: true },
    isFastMoving: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
