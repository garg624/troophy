"use server"

import { ConnectToDB } from "@/db/db";
import Award from "@/models/award";
import { cldMediaDelete } from "@/utils/deleteCldMedia.util";

export const deleteMediaAction = async (awardID,mId) => {
    try {
        await ConnectToDB();
        const response = await Award.findByIdAndDelete(awardID).exec();
        await cldMediaDelete(mId);
    }catch(error) {
        console.log("Error in deleteMediaAction: ", error);
    }
}