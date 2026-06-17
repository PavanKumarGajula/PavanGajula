import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const cookie = req.cookies.get("learning_auth");
  if (!cookie || cookie.value !== process.env.LEARNING_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { path: segments } = await params;

  // Allow at most folder/file.pdf — no deeper traversal
  if (segments.length > 2) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Sanitize each segment to prevent path traversal
  const safeSegments = segments.map((s) => path.basename(s));
  const filePath = path.join(process.cwd(), "private-resources", ...safeSegments);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const buffer = fs.readFileSync(filePath);
  const filename = safeSegments[safeSegments.length - 1];
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
