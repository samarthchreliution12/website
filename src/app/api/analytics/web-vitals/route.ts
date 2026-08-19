import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const metric = await req.json();
    console.log("📊 [Next.js Web Vitals Performance Report]:", {
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      navigationType: metric.navigationType,
      receivedAt: new Date().toISOString(),
    });

    return new NextResponse(null, { status: 204 }); // 204 No Content is ideal for beacons
  } catch (err) {
    console.error("Failed to process web vitals payload:", err);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
