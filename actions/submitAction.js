'use server';

import { addUser } from "@/utils/addUser.util";

export const submitAction = async (e) => {
    const rawData = {
       username: e.get("username").toLowerCase(),
       password: e.get("password"),
       accessToken: e.get("accessToken"),
    };
    try {
       await addUser(rawData.username,rawData.password, rawData.accessToken);
    }catch(error) {
      throw error;
    }
}