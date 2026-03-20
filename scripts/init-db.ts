```ts
import { Pool } from "pg";
import "dotenv/config";

async function main() {
  const pool = new Pool({
    connectionString: process.env.DB_URL,
  });

  await pool.query(`
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

  console.log("✅ users table created successfully");
  await pool.end();
}

main().catch((err) => {
  console.error("❌ DB init failed:", err);
  process.exit(1);
});
```
