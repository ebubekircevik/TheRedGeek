import { NextRequest, NextResponse } from "next/server";
import { updateInCollection, deleteFromCollection } from "@/lib/mongoHelpers";
import { Blog } from "@/types/blog";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  const result = await updateInCollection<Blog>("blogs", params.id, data);
  return NextResponse.json({ modifiedCount: result.modifiedCount });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const result = await deleteFromCollection("blogs", params.id);
  return NextResponse.json({ deletedCount: result.deletedCount });
}
