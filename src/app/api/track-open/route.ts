import { NextRequest, NextResponse } from "next/server";

// 43-byte 1x1 transparent GIF (standard). GET has zero side effects.
const ONE_PX_GIF = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(_request: NextRequest) {
  return new NextResponse(ONE_PX_GIF, {
    headers: { "Content-Type": "image/gif" },
  });
}
