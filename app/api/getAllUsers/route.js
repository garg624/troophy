import { ConnectToDB } from "@/db/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await ConnectToDB();
        const users = await User.find().exec();
        return NextResponse.json(users);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
    }
}
