import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard the /learning page (not the auth API itself)
  if (pathname.startsWith("/learning")) {
    const cookie = req.cookies.get("learning_auth");
    if (!cookie || cookie.value !== process.env.LEARNING_PASSWORD) {
      // Let the page handle its own login UI — just pass through
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/learning/:path*"],
};
