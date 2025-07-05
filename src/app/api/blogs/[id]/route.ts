import { NextRequest, NextResponse } from "next/server";
import { updateInCollection, deleteFromCollection } from "@/lib/mongoHelpers";
import { Blog } from "@/types/blog";

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const data = await request.json();
  const result = await updateInCollection<Blog>("blogs", id as string, data);
  return NextResponse.json({ modifiedCount: result.modifiedCount });
}

export async function DELETE(request: NextRequest) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const result = await deleteFromCollection("blogs", id as string);
  return NextResponse.json({ deletedCount: result.deletedCount });
}
