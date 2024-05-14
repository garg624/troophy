import mongoose from "mongoose";
let isConnected = false;

export const ConnectToDB = async () => {
    if (isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_ATLAS_URL, {
            dbName: 'trophy-site',
        });
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
