import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  if (request.nextUrl.searchParams.get("amp") === "1" && request.nextUrl.pathname !== "/amp-doc") {
    const url = request.nextUrl.clone();
    url.pathname = "/amp-doc";
    url.search = "";
    requestHeaders.set("x-amp-source", request.nextUrl.pathname);
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|media/|favicon|android-chrome|apple-touch|site.webmanifest|og.jpg|robots.txt|sitemap).*)"],
};
