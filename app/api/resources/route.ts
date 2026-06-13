import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("learning_auth");
  if (!cookie || cookie.value !== process.env.LEARNING_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dir = path.join(process.cwd(), "private-resources");

  if (!fs.existsSync(dir)) {
    return NextResponse.json({ files: [] });
  }

  const entries = fs
    .readdirSync(dir)
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .map((name) => {
      const stat = fs.statSync(path.join(dir, name));
      const kb = stat.size / 1024;
      const size = kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
      return { name, size };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json({ files: entries });
}
