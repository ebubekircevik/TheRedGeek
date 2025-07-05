import { NextRequest, NextResponse } from "next/server";
import { getAllFromCollection, insertToCollection } from "@/lib/mongoHelpers";
import { User } from "@/types/user";

export async function GET() {
  const users = await getAllFromCollection<User>("users");
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await insertToCollection<User>("users", data);
  return NextResponse.json({ insertedId: result.insertedId });
}
