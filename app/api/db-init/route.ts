```ts
import db from "@/lib/db";

export async function POST() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        nickname VARCHAR(30) NOT NULL,
        device_fingerprint VARCHAR(64) NOT NULL UNIQUE,
        token VARCHAR(128) NOT NULL UNIQUE,
        merit BIGINT NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
    return Response.json({ ok: true, message: "users table created" });
  } catch (e: any) {
    return Response.json({ ok: false, error: e.message }, { status: 500 });
  }
}
```
