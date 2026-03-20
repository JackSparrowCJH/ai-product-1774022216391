```ts
import db from "@/lib/db";
import redis from "@/lib/redis";

export async function GET() {
  const checks: Record<string, string> = { status: "ok" };

  try {
    await db.query("SELECT 1");
    checks.database = "connected";
  } catch {
    checks.database = "disconnected";
  }

  try {
    const pong = await redis.ping();
    checks.redis = pong; // "PONG"
  } catch {
    checks.redis = "disconnected";
  }

  return Response.json(checks, { status: 200 });
}
```
