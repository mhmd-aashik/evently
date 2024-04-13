"use server";

import { CreateUserParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
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
