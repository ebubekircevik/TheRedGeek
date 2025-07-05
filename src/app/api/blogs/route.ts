import { NextRequest, NextResponse } from "next/server";
import { getAllFromCollection, insertToCollection } from "@/lib/mongoHelpers";
import { Blog } from "@/types/blog";

export async function GET() {
  const blogs = await getAllFromCollection<Blog>("blogs");
  return NextResponse.json(blogs);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = await insertToCollection<Blog>("blogs", data);
  return NextResponse.json({ insertedId: result.insertedId });
}

// PUT ve DELETE için id gerekecek, bu yüzden [id]/route.ts dosyası da gerekli.
