import { NextRequest, NextResponse } from "next/server";

/**
 * IndexNow API endpoint for notifying search engines about content updates
 * Supports Bing and Yandex IndexNow protocol
 * 
 * Usage: POST /api/indexnow
 * Body: { "url": "https://www.couplesocials.com/page-url" }
 * 
 * Set INDEXNOW_API_KEY environment variable with your IndexNow key
 * Place the key file at: public/{INDEXNOW_API_KEY}.txt
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    const indexNowKey = process.env.INDEXNOW_API_KEY;
    if (!indexNowKey) {
      return NextResponse.json(
        { error: "IndexNow API key not configured" },
        { status: 500 }
      );
    }

    // IndexNow API endpoints
    const indexNowEndpoints = [
      "https://api.indexnow.org/IndexNow",
      "https://www.bing.com/indexnow",
      "https://yandex.com/indexnow",
    ];

    const payload = {
      host: new URL(url).hostname,
      key: indexNowKey,
      keyLocation: `https://${new URL(url).hostname}/${indexNowKey}.txt`,
      urlList: [url],
    };

    // Notify all IndexNow endpoints
    const results = await Promise.allSettled(
      indexNowEndpoints.map((endpoint) =>
        fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
      )
    );

    const successCount = results.filter(
      (result) => result.status === "fulfilled"
    ).length;

    return NextResponse.json({
      success: true,
      notified: successCount,
      total: indexNowEndpoints.length,
      url,
    });
  } catch (error) {
    console.error("IndexNow error:", error);
    return NextResponse.json(
      { error: "Failed to notify search engines" },
      { status: 500 }
    );
  }
}

