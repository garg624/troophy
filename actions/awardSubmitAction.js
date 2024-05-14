'use server';

import { ConnectToDB } from "@/db/db";
import Award from "@/models/award";

export const awardSubmitAction = async (awardData) => {
    try {
        await ConnectToDB();
        await Award.create(awardData);
   } catch (error) {
        console.log("Error:", error);
    }
};
