import { ConnectToDB } from "@/db/db";
import Award from "@/models/award";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectToDB();
    const response = await Award.find().exec();
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error fetching awards" }, { status: 500 });
  }
}