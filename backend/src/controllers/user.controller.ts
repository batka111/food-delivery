import { Request, Response } from "express";
import { User } from "../models/user.model.js";

export const getAllUsers = async (request: Request, response: Response) => {
  try {
    const users = await User.find();

    response.json({
      success: true,
      data: users,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getUsersByid = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params; // 6853b667726e33f014c6f024
    const user = await User.findById(userId);

    response.json({
      success: true,
      data: user,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createUsers = async (request: Request, response: Response) => {
  try {
    const user = request.body;
    const createdUser = await User.create(user);

    response.json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const updateUser = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;
    const updatedUser = request.body;

    const user = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });

    response.json({
      success: true,
      data: user,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const deleteUser = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;
    console.log(userId);

    const deletedUser = await User.findByIdAndDelete(userId);

    response.json({
      success: true,
      data: deletedUser,
    });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
