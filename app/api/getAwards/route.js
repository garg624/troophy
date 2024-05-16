import { ConnectToDB } from "@/db/db";
import Award from "@/models/award";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await ConnectToDB(); // Establish database connection

    const { awardIds } = req.query;
    console.log("INSIDE API",awardIds)
    // Validate awardIds (optional)
    if (!awardIds || !Array.isArray(awardIds)) {
      return NextResponse.json({ message: "Invalid awardIds parameter", status: 400 });
    }

    const data = await Award.find({ _id: { $in: awardIds } }).exec();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching awards:", error);

    if (error.name === "MongoError") { // Handle database-specific errors
      return NextResponse.json({ message: "Database error", status: 500 });
    } else {
      return NextResponse.json({ message: "Internal server error", status: 500 });
    }
  }
}
