import mongoose from "mongoose";

const { Schema, model } = mongoose;

const foodCategory = new Schema({
  categoryName: String,
  createdAt: Date,
  updatedAt: Date,
});

export const foodCategories = model("foodCategories", foodCategory);
