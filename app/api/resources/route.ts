import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

function fileSize(filePath: string) {
  const kb = fs.statSync(filePath).size / 1024;
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
}

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get("learning_auth");
  if (!cookie || cookie.value !== process.env.LEARNING_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dir = path.join(process.cwd(), "private-resources");
  if (!fs.existsSync(dir)) {
    return NextResponse.json({ folders: [], files: [] });
  }

  const folderParam = req.nextUrl.searchParams.get("folder");

  if (folderParam) {
    const safeName = path.basename(folderParam);
    const folderPath = path.join(dir, safeName);
    if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((name) => ({ name, size: fileSize(path.join(folderPath, name)) }))
      .sort((a, b) => a.name.localeCompare(b.name));
    return NextResponse.json({ files });
  }

  const entries = fs.readdirSync(dir);

  const folders = entries
    .filter((e) => fs.statSync(path.join(dir, e)).isDirectory())
    .map((name) => ({
      name,
      count: fs.readdirSync(path.join(dir, name)).filter((f) => f.toLowerCase().endsWith(".pdf")).length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const files = entries
    .filter((e) => e.toLowerCase().endsWith(".pdf"))
    .map((name) => ({ name, size: fileSize(path.join(dir, name)) }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return NextResponse.json({ folders, files });
}
