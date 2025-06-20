import mongoose from "mongoose";
import { Food } from "./food.model.js";

const { Schema, model } = mongoose;

const foodOrder = new Schema({
  user: String,
  totalPrice: Number,
  foodOrderItems: [
    {
      type: Schema.ObjectId,
      ref: Food,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const FoodOrder = model("FoodOrder", foodOrder);
