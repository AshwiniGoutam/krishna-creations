import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/app/lib/mongodb";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("rkc");
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid order ID" }, { status: 400 });
    }
    const objectId = new ObjectId(id);

    const result = await db
      .collection("orders")
      .findOneAndUpdate(
        { _id: objectId },
        { $set: { status: "delivered" } },
        { returnDocument: "after" }
      );

    if (!result.value) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, order: result.value });
  } catch (err) {
    console.error("PATCH Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
