// addUser.js
import { ConnectToDB } from "@/db/db";
import User from "@/models/user";

export const addUser = async (username, password, accessToken) => {
  try {
    await ConnectToDB(); 
    const newUser = await User.create({ username, password, accessToken });
  } catch (error) {
    throw error;
  }
};
