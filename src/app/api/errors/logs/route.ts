import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, message, stack, url } = await req.json();
    const userAgent = req.headers.get("user-agent") || "Unknown Device";

    console.error("🚨 [User Device Crash Report]:", {
      url,
      name,
      message,
      device: userAgent,
      stack: stack ? stack.split("\n").slice(0, 3).join("\n") : "No stack trace",
      timestamp: new Date().toISOString(),
    });

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to log error" }, { status: 400 });
  }
}