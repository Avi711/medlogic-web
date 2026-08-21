import { readFileSync } from "node:fs";
import type { Config } from "drizzle-kit";

/*
  drizzle-kit runs outside Next, so it does not see .env.local. Parsing it here
  keeps the credentials in one place without pulling in dotenv for a single CLI
  command. Real environment variables always win.
*/
try {
  for (const line of readFileSync(".env.local", "utf8").split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
} catch {
  // No .env.local — fall back to whatever the shell already exports.
}

/*
  Migrations use the DIRECT connection (port 5432), not the transaction pooler:
  DDL over the pooler fails or silently misbehaves. DATABASE_URL is the runtime
  pooled URL and is only a fallback for local databases that have no pooler.
*/
export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? "",
  },
} satisfies Config;
