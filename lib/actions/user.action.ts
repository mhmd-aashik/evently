"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export async function createUser(userData: any) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUsers(params: any) {
  try {
    connectToDatabase();
    const allUsers = await User.find({});
    return allUsers;
  } catch (error) {
    console.log(error);
  }
}
