'use server';

import { ConnectToDB } from "@/db/db";
import User from "@/models/user";

export const deleteUserAction = async ( userId ) => {
    try {
        await ConnectToDB(); 
        const response = await User.findByIdAndDelete(userId).exec();
    } catch (error) {
        console.error("Error deleting user:", error); 
    }
}
