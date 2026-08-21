import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Lazily built so the site still builds and runs with no database configured:
 * the lead route falls back to its other delivery channels, and /admin reports
 * that it is not connected rather than crashing.
 */
let cached: PostgresJsDatabase<typeof schema> | null | undefined;

export function getDb(): PostgresJsDatabase<typeof schema> | null {
  if (cached !== undefined) return cached;

  const url = process.env.DATABASE_URL;
  if (!url) {
    cached = null;
    return cached;
  }

  const client = postgres(url, {
    /*
      Supabase's transaction pooler (port 6543) cannot hold prepared statements
      across a pooled connection — leaving this on produces intermittent
      "prepared statement already exists" errors under any real traffic.
    */
    prepare: false,
    // One connection per serverless instance; the pooler does the pooling.
    max: 1,
    connect_timeout: 5,
  });

  cached = drizzle(client, { schema });
  return cached;
}
